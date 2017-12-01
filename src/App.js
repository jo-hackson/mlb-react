import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ParentsLoginPage from './components/pages/ParentsLoginPage';
import KidsLoginPage from './components/pages/KidsLoginPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

const App = () => 
	<div className="ui container">
		<Route path="/" exact component={HomePage} />
		<Route path="/signup" exact component={SignupPage} />
		<Route path="/parents-login" exact component={ParentsLoginPage} />
		<Route path="/kids-login" exact component={KidsLoginPage} />
		<Route path="/login" exact component={LoginPage} />
  </div>;

export default App;