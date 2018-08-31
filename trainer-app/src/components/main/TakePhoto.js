import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Spinner from '../helpers/Spinner';
import Photo from './Photo';
import { Button } from 'reactstrap';
 
class TakePhoto extends Component {
	
	state = {
		firstPhotoWasTaken: null,
		secondPhotoWasTaken: null,
		loading: true
	};

	onTakePhoto (dataUri) {
		// Do stuff with the dataUri photo...
		let photo = dataUri;
		this.setState({ 
			[this.props.id]: photo
		});
		this.props.cameraWasClicked([this.props.id, true]);
		console.log(this.props.id);
	}

	onCameraStart (stream) {
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

					{/* <Photo path={this.state.secondPhotoWasTaken} altName='Nuotrauka iš priekio' /> */}
					{this.state.firstPhotoWasTaken ? <Photo path={this.state.firstPhotoWasTaken} altName='Nuotrauka iš priekio' /> : null}
					{this.state.secondPhotoWasTaken ? <Photo path={this.state.secondPhotoWasTaken} altName='Nuotrauka iš šono' /> : null}

					{this.state.firstPhotoWasTaken ? <Button color='warning' className='resetCamera'>Nauja nuotrauka</Button> : null}
					{this.state.secondPhotoWasTaken ? <Button color='warning' className='resetCamera'>Nauja nuotrauka</Button> : null}
				</div>
			</Auxiliary>
		);
	}
}
 
export default TakePhoto;