import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

class SignupForm extends React.Component {

	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	}

	onChange = event =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});

	onSubmit = event => {
		event.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submit(this.state.data)
				.catch(err => 
					this.setState({ errors: err.response.data.errors, loading: false})
				);
		}
	};

	validate = data => {
		const errors = {};

		if (!isEmail(data.email)) errors.email = 'invalid email';
		if (!data.password) errors.password = 'cannot be blank';

		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<div>
				<Form onSubmit={this.onSubmit} loading={loading} >
					<Form.Field error={!!errors.email}>
						<label htmlFor="email">email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="example@mail.com"
							value={data.email}
							onChange={this.onChange}
						/>
						{errors.email && <InlineError text={errors.email} />}
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
						{errors.password && <InlineError text={errors.password} />}
					</Form.Field>
					<Button primary>login</Button>
				</Form>
		  </div>
		);
	}
}

SignupForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default SignupForm;