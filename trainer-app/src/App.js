import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';
// import Error from './components/Error';
import Dashboard from './components/main/Dashboard';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/login' component={Login} exact />
					<Route path='/forgot' component={ForgotPassword} />
					<Route path='/dashboard' component={Dashboard} />
					{/* <Route component={Error} /> */}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
