import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';
import Dashboard from './components/main/Dashboard';
import NewClient from './components/main/NewClient';
import ExistingClient from './components/main/ExistingClient';
// import Error from './components/Error';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/login' component={Login} exact />
					<Route path='/forgot' component={ForgotPassword} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/new-client' component={NewClient} />
					<Route path='/existing-client' component={ExistingClient} />
					{/* <Route component={Error} /> */}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
