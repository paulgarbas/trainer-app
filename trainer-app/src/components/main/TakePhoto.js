import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Spinner from '../helpers/Spinner';
import Photo from './Photo';

class TakePhoto extends Component {
	
	state = {
		firstPhotoWasTaken: null,
		secondPhotoWasTaken: null,
		loading: true
	};
	
	onTakePhoto (dataUri) {
		let photo = dataUri;
		this.setState({ 
			[this.props.id]: photo,
			showCameraBtn: false
		});
		
		// Camera button disappears
		let cameraBtn = document.querySelector(`#${this.props.id}`).querySelector('#container-circles');
		cameraBtn.style.display = 'none';
	}

	onCameraStart (stream) {
		this.setState({
			loading: false
		});
	}

	resetHandler = (event) => {
        event.preventDefault();

		this.setState({
			[this.props.id]: null,
			showCameraBtn: true			
		});

		// Camera button appears
		let cameraBtn = document.querySelector(`#${this.props.id}`).querySelector('#container-circles');
		cameraBtn.style.display = 'block';
	}

	render () {
		return (
			<Auxiliary>
				<div id={this.props.id} className="camera">
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

					{this.state.firstPhotoWasTaken ? 
						<Photo 
							path={this.state.firstPhotoWasTaken} 
							altName='Nuotrauka iš priekio'
							resetClicked={this.resetHandler} /> : 
					null}
					{this.state.secondPhotoWasTaken ? 
						<Photo 
							path={this.state.secondPhotoWasTaken} 
							altName='Nuotrauka iš šono'
							resetClicked={this.resetHandler} /> : 
					null}
				</div>
			</Auxiliary>
		);
	}
}
 
export default TakePhoto;