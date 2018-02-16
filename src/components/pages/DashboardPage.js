import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
// import AddChildForm from '../forms/AddChildForm';
// import { addChild } from '../../actions/parents';

class DashboardPage extends React.Component {

	render() {
		const { gender, lastName, isMale } = this.props;
		return (
			<div>
				<h1>dashboard page</h1>
				<h2>{ isMale ? <span>Mr.</span> : <span>Mrs.</span> } { lastName } </h2>

			</div>
		);
	};
};

DashboardPage.propTypes = {
	gender: PropTypes.string,
	lastName: PropTypes.string
};

function mapStateToProps(state) {
	return {
		gender: state.user.gender,
		lastName: state.user.lastName,
		isMale: state.user.gender === 'male'
	};
};


export default connect(mapStateToProps)(DashboardPage);
