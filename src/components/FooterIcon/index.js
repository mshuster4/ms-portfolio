import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "./style.css"

function FooterIcon(props) {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon}/>
        </div>
    )
}

export default FooterIcon;