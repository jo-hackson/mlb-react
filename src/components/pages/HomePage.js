// functional component

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const HomePage = ({ isAuthenticated }) => (
	<div>
		<h1>Welcome to My Little Banker</h1>
		{ isAuthenticated ? <button>logout</button> : <p><Link to="/login">login</Link> or <Link to="/signup">sign up</Link></p> }
  </div>
);

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps)(HomePage);