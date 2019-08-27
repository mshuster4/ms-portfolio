import React from 'react';


function ModalList(props) {
    console.log(props) 
    console.log(props.techsUsed)
    const techs = props.techsUsed;
    const listItems = techs.map((tech) => 
        <li>{tech}</li>
    );
    console.log(listItems);
    return (
        <div className="modal-list">
            <h4 className="modal-list-header">Technologies Used</h4>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ModalList