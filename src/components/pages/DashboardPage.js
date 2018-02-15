import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import AddChildForm from '../forms/AddChildForm';
import { addChild } from '../../actions/parents';
import Parent from '../../components/people/Parent';

class DashboardPage extends React.Component {

	submit = (data) => console.log('hello');

	render() {
		return (
			<div>
				<h1>react Component</h1>

				<div>
					<AddChildForm submit={this.submit} />
					<Parent />
				</div>
			</div>
		);
	};
};

DashboardPage.propTypes = {
	addChild: PropTypes.func.isRequired
};

export default connect(null, { addChild })(DashboardPage);
