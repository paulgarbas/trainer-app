import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Photo from './Photo';
import Spinner from '../helpers/Spinner';
 
class TakePhoto extends Component {
	
	state = {
		photo: null,
		loading: true
	};

	onTakePhoto (dataUri) {
		// Do stuff with the dataUri photo...
		let photo = dataUri;
		this.setState({ photo });
	}

	onCameraStart (stream) {
		console.log('onCameraStart');
		this.setState({
			loading: false
		});
	}

	render () {
		return (
			<Auxiliary>
				<div className="camera">
					{this.state.loading ? <Spinner /> : null}
					
					<Camera
						onTakePhoto = {(dataUri) => { 
							this.onTakePhoto(dataUri); 
						}}
						onCameraStart = {(stream) => { 
							this.onCameraStart(stream); 
						}}
						isMaxResolution = {false}
					/>

					{this.state.photo ? <Photo path={this.state.photo} /> : null}
				</div>
			</Auxiliary>
		);
	}
}
 
export default TakePhoto;