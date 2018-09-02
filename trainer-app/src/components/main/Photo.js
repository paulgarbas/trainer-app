import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import { Button } from 'reactstrap';

const photo = (props) => (
    <Auxiliary>
        <img className='photo' src={props.path} alt={props.altName} /> 
        <Button 
            color='warning' 
            className='resetCamera'
            onClick={props.resetClicked}>Nauja nuotrauka</Button>
    </Auxiliary>
)

export default photo;