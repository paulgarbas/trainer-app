import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
class Photo extends Component {
	
	state = {
		photo: null
	};

	onTakePhoto (dataUri) {
		// Do stuff with the dataUri photo...
		let photo = dataUri;
		this.setState({ photo });
	}

	render () {
		return (
			<Auxiliary>
				<div className="camera">
					<Camera
						onTakePhoto = { (dataUri) => { 
							this.onTakePhoto(dataUri); 
						} }
						isMaxResolution = {false}
					/>
				</div>
				{/* <img src={this.state.photo} alt="Smiley face" height="200" width="200" /> */}
			</Auxiliary>
		);
	}
}
 
export default Photo;