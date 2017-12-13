// functional component

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';


const HomePage = ({ isAuthenticated, logout }) => (
	<div>
		<h1>Welcome to My Little Banker</h1>
		{ isAuthenticated ? <button onClick={() => logout()}>logout</button> : <p><Link to="/login">login</Link> or <Link to="/signup">sign up</Link></p> }
  </div>
);

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	}
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);