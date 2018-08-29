import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const cameraLogo = (props) => (
    <a href="#" 
        data-id={props.id}
        onClick={props.clicked} >
        <FontAwesomeIcon 
            icon={faCamera} 
            className='cameraIcon' />
    </a> 
)

export default cameraLogo;