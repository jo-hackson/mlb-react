import React from 'react';
import { Link } from 'react-router-dom';

const KidsLoginPage = () => (
	<div>
		<h1>this is the login page for kids</h1>
		<h2>click here if you are a parent to<Link to="/parents-login">login</Link></h2>
		<Link to="/">home</Link>
  </div>
);

export default KidsLoginPage;

