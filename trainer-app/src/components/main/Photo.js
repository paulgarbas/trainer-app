import React from 'react';

const photo = (props) => (
    <img className='photo' src={props.path} alt={props.altName} /> 
)

export default photo;