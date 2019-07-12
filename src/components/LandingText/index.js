import React from "react";
import { Animated } from "react-animated-css";

function LandingText(props) {
    return (
        <Animated className="text-animation" animationIn="fadeIn" animationInDelay={props.delay} isVisibile={true}>
            {props.children}
        </Animated>
    )
}

export default LandingText