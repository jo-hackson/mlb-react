import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
// import AddChildForm from '../forms/AddChildForm';
// import { addChild } from '../../actions/parents';

class DashboardPage extends React.Component {

	render() {
		const { gender, lastName } = this.props;
		return (
			<div>
				<h1>dashboard page</h1>

				<h2><GenderSalutation gender={gender}/> {lastName}</h2>

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
		lastName: state.user.lastName
	};
};

function GenderSalutation(gender) {
  if (gender.gender === 'male') {
    return <span>Mr.</span>;
  }
  return <span>Mrs.</span>;
}

export default connect(mapStateToProps)(DashboardPage);
