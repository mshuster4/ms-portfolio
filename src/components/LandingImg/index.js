import React, { useState, useEffect } from "react"
import LandingImgLg from "../../assets/page-images/landing-page-lg-5.png";
import LandingImgSm from "../../assets/page-images/landing-page-sm-2.png";

function LandingImg (props) {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const imageURL = window.innerWidth >= 568 ? LandingImgLg : LandingImgSm;

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