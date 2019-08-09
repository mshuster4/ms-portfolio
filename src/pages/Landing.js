import React, { Component } from "react";

import LandingContainer from "../components/LandingContainer";
import LandingText from "../components/LandingText";
import LandingImg from "../components/LandingImg";
import Button from "../components/Button";
import Icon from "../components/Icon";


class Landing extends Component {

    render() {
        return (
          <div className="bg-color">
              <LandingContainer>
                 <LandingImg className="d-flex justify-content-start">
                    <div className="landing-content">
                       <div className="headline-container">
                            <LandingText delay={1000}><h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1></LandingText>
                            <LandingText delay={2000}><h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1></LandingText>
                        </div>
                        <div className="button-container">
                            <LandingText delay={3000}>
                                <a href="#portfolio" className="landing-link" data-menuanchor="landing">
                                    <Button className="landing-botton" outline={true}>
                                      View My Creations 
                                    </Button>
                                </a>
                            </LandingText>
                        </div>
                    </div>
                 </LandingImg>
              </LandingContainer>
          </div>
        );
    }
}


export default Landing;