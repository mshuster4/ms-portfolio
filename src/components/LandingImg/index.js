import React, { useState, useEffect } from "react"
import LandingImgLg from "../../assets/page-images/landing-img-lg.png";
import LandingImgSm from "../../assets/page-images/landing-img-sm.png";
import LandingImgTwo from "../../assets/page-images/landing-page-lg-two.png";
import "./style.css"

function LandingImg (props) {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const imageURL = window.innerWidth >= 568 ? LandingImgTwo : LandingImgSm;

     const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

     useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
       <div className="landing-img" style={{ backgroundImage: `url(${imageURL})` }}>
            {props.children}
       </div>
    )
}

export default LandingImg; 