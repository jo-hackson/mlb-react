import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Button } from 'semantic-ui-react';
// import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
// import AddChildForm from '../forms/AddChildForm';
// import { addChild } from '../../actions/parents';

class DashboardPage extends React.Component {

	render() {
		const { gender, lastName, isMale, logout } = this.props;
		return (
			<div>
				<Link to="/"><i className="circular home icon"></i></Link>
				<Button className="circular basic icon" onClick={() => logout()}><i className="circular log out icon"></i></Button>
				<h1>dashboard page</h1>
				<h2>{ isMale ? <span>Mr.</span> : <span>Mrs.</span> } { lastName } </h2>
			</div>
		);
	};
};

DashboardPage.propTypes = {
	gender: PropTypes.string,
	lastName: PropTypes.string,
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		gender: state.user.gender,
		lastName: state.user.lastName,
		isMale: state.user.gender === 'male'
	};
};


export default connect(mapStateToProps, { logout: actions.logout })(DashboardPage);
