import React, { Component } from "react";
import { MDBMask, MDBView, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import campPreview from "../../assets/page-images/camp-wanna-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";


class ReactPortfolio extends Component {

    render() {
      return(
        <div>
          <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                    <MDBView hover>
                    <img
                        src={campPreview}
                        className="img-fluid"
                        alt=""
                    />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                    <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                    </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="4">
                    <MDBView hover>
                    <img
                        src={campPreview}
                        className="img-fluid"
                        alt=""
                    />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                    <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                    </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="4">
                    <MDBView hover>
                    <img
                        src={campPreview}
                        className="img-fluid"
                        alt=""
                    />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                    <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                    </MDBMask>
                    </MDBView>
                </MDBCol>
            </MDBRow>
          </MDBContainer>            
        </div>
        );
    }
}

export default ReactPortfolio;
