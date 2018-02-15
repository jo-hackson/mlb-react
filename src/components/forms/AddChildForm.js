import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import Gender from '../pieces/GenderRadioButtons';

class AddChildForm extends React.Component{

	state = {
		data: {
			childFirstName: '',
			startingBalance: ''
		},
		loading: false,
		errors: {}
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0 ) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data)
				.catch(err => this.setState({ errors: err.response.data.errors, loading: false })
			);
		}
	};

	onChange = (event) =>
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value }
	});

	validate = (data) => {
		const errors = {};
		if (!!Validator.isEmpty(data.childFirstName)) errors.childFirstName = 'cannot be empty';
		if (!Validator.isInt(data.startingBalance, { min: 0 })) errors.startingBalance = 'enter a balance of $0 or greater';
		return errors;
	};

	render() {
		const { data, errors, loading }	= this.state;

		return (
			<div>
				<h2>add a child form</h2>
				<Form onSubmit={this.onSubmit} loading={loading}>
				{ errors.global && (<Message negative>
					<Message.Header>something went wrong</Message.Header>
					<p>{errors.global}</p>
					</Message>
				)}

					<Form.Field>
						<label htmlFor="childFirstName"> child first name</label>
						<input
							type="text"
							id="childFirstName"
							name="childFirstName"
							placeholder="little Jimmy"
							value={data.childFirstName}
							onChange={this.onChange}
						/>
					</Form.Field>

					<Form.Field error={!!errors.startingBalance}>
						{errors.startingBalance && <InlineError text={errors.startingBalance} />}
						<label htmlFor="startingBalance">starting balance</label>
						<input
							type="number"
							id="startingBalance"
							name="startingBalance"
							placeholder="$0"
							value={data.startingBalance}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Button primary>add child</Button>
				</Form>
			</div>

		)
	}
};

AddChildForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default AddChildForm;
