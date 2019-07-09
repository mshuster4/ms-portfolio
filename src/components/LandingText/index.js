import React from "react";
import { Animated } from "react-animated-css";

function LandingText(props) {
    return (
        <div className="landing-text">
            <Animated className="text-animation" animationIn="fadeIn" animationInDelay={props.delay} isViibile={true}>
                {props.children}
            </Animated>
        </div>
    )
}

export default LandingText