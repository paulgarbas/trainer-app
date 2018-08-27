import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import About from './components/About';
import Error from './components/Error';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' component={LoginPage} exact />
					<Route path='/about' component={About} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
