import React from 'react';
import { Link } from 'react-router-dom';

const ParentsLoginPage = () => (
	<div>
		<h1>Welcome to the parents login page</h1>
		<h2>click here if you are a kid to <Link to="/parents-login">login</Link></h2>
		<Link to="/">home</Link>
  </div>
);

export default ParentsLoginPage;
