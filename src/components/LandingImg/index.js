import React from "react"
import LandingImgLg from "../../assets/page-images/landing-img-lg.png";
import LandingImgSm from "../../assets/page-images/landing-img-sm.png";
import "./style.css"

function LandingImg (props) {

    const imageURL = LandingImgLg;    

    return (
       <div className="landing-img" style={{ backgroundImage: `url(${imageURL})` }}>
            {props.children}
       </div>
    )
}

export default LandingImg; 