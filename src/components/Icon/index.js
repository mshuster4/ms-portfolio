import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "./style.css"

function Icon(props) {
    return (
        <FontAwesomeIcon icon={props.icon} size={props.size}/>
    )
}

export default Icon;