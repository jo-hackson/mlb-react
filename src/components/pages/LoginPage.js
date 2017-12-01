import React from 'react';
import { Link } from 'react-router-dom';
import ParentsLoginForm from '../forms/ParentsLoginForm';
import KidsLoginForm from '../forms/KidsLoginForm';
import SignupForm from '../forms/SignupForm';
import Tabs from '../pieces/Tabs';
import Pane from '../pieces/Pane';
import ParentLoginForm from '../forms/ParentsLoginForm';
import KidLoginForm from '../forms/KidsLoginForm';

class LoginPage extends React.Component {
  



	render() { 
		return (
			<div>
		  	<h1>this is the login page</h1>

	  		<Tabs selected={0}>
		  		<Pane label="parent login">
		  			<div className="ui bottom attached tab segment active">
		  				<p>parent login</p>
		  				<ParentsLoginForm />
		  			</div>
		  		</Pane>
		  		<Pane label="kid login">
		  			<div className="ui bottom attached tab segment active" >
		  				<p>kid login</p>
		  				<KidsLoginForm />
		  			</div>
		  		</Pane>
		  	</Tabs>

		  	<Link to="/">home</Link>
			</div>


		);
	}


};

export default LoginPage;



