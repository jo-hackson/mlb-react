// functional component

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div>
		<h1>Welcome to My Little Banker</h1>
		<p><Link to="/login">login</Link> or <Link to="/signup">sign up</Link></p>
  </div>
);

export default HomePage;