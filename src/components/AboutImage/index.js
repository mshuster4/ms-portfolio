import React from "react";
import Image from 'react-bootstrap/Image'
import Headshot from "../../assets/page-images/headshot.jpg";
import "./style.css"

function AboutImage() {
    return (
        <Image className="head-shot" src={Headshot} alt="Headshot" roundedCircle fluid/>
    );
}

export default AboutImage;