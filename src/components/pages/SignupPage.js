import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';

class SignupPage extends React.Component {

	render() {
		return (
			<div>
				<h1>this is the signup page</h1>
				<SignupForm />
				<h2>already have an account? <Link to="/login">login</Link></h2>
				<Link to="/">home</Link>
			</div>
		);
	}
}


export default SignupPage;


