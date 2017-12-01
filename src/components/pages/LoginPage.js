import React from 'react';
import { Link } from 'react-router-dom';
import ParentsLoginForm from '../forms/ParentsLoginForm';
import KidsLoginForm from '../forms/KidsLoginForm';
import SignupForm from '../forms/SignupForm';
import Tabs from '../pieces/Tabs';
import Pane from '../pieces/Pane';

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

		  	<h2>first time here? then click here to <Link to="/signup">sign up</Link></h2>
		  	<Link to="/"><i class="home icon"></i></Link>
			</div>
		);
	}


};

export default LoginPage;



