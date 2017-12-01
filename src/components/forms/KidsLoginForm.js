import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class KidsLoginForm extends React.Component{

	state = {
		data: {
			secretCode: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};

	onChange = (event) =>
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.secretCode)) errors.secretCode = 'invalid secret code';
		if (!data.password) errors.password = 'cannot be blank';
		return errors;
	};

	render() {
		const { data, errors } = this.state;

		return (
			<div>
				<Form onSubmit={this.onSubmit}>
					<Form.Field error={!!errors.secretCode}>
						<label htmlFor="secretCode">secret code</label>
						<input
							type="text"
							id="secretCode"
							name="secretCode"
							placeholder="your secret code"
							value={data.secretCode}
							onChange={this.onChange}
						/>
						{errors.secretCode && <InlineError text={errors.secretCode} />}
					</Form.Field>
					<Form.Field error={!!errors.password}>
						<label htmlFor="password">password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="keep it secure"
							value={data.password}
							onChange={this.onChange}
						/>
					</Form.Field>
					<Button primary>login</Button>
				</Form>
		  </div>
		);
	}
};

KidsLoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default KidsLoginForm;

