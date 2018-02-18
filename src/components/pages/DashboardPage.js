// need to create some methods for when child is added



import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { logout } from '../../actions/auth';
import * as actions from '../../actions/parents';
import AddChildForm from '../forms/AddChildForm';
// import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
// import { login } from '../../actions/auth';


class DashboardPage extends React.Component {

	constructor() {
		super();
		this.state = {
			isAddChildFormClicked: false
		}

		this.showAddChildForm = this.showAddChildForm.bind(this);
	}

	showAddChildForm() {
		this.setState( prevState => ({
			isAddChildFormClicked: !prevState.isAddChildFormClicked
		}));
	}

	submit = (data) => this.props.addChild(data).then(() => this.props.history.push('/dashboard'));


	render() {
		const { lastName, isMale } = this.props;

		return (
			<div>
				<Link to="/"><i className="circular home icon blue"></i></Link>
				<i onClick={() => logout()}><i className="circular log out icon blue"></i></i>
				<h1>dashboard page</h1>
				<h2>Welcome { isMale ? <span>Mr.</span> : <span>Mrs.</span> } { lastName } </h2>

				{this.state.isAddChildFormClicked ? <AddChildForm submit={this.submit} /> : <Button onClick={this.showAddChildForm} className="basic blue">add child</Button>}

			</div>
		);
	};
};

DashboardPage.propTypes = {
	lastName: PropTypes.string.isRequired,
	isMale: PropTypes.bool.isRequired,
	addChild: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
};

function mapStateToProps(state) {
	return {
		gender: state.user.gender,
		lastName: state.user.lastName,
		isMale: state.user.gender === 'male'
	};
};




export default connect(mapStateToProps, { addChild: actions.addChild })(DashboardPage);
