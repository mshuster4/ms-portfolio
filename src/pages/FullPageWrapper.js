import React, { Component }  from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Landing from "./Landing"



const key = process.env.REACT_APP_FULLPAGE_API_KEY;

class FullPageWrapper extends Component {

  render() {
    return (
        <ReactFullpage
          licenseKey={key}
          anchors={["landing", "portfolio", "about", "contact"]}
          menu={true}
          sectionsColor={["black", "white", "black", "white"]}
          scrollOverflow={true}
          fitToSection={true}
          setAutoScroll={true}
          render={({ fullpageApi, state }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <Landing/>
            </div> 
          </div>
        );
        }}
    
    />

    );
  }
}

export default FullPageWrapper;
