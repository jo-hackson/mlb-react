import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class ParentsLoginForm extends Component {
	
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ ...this.state, loading: true });
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
		if (!Validator.isEmail(data.email)) errors.email = 'invalid email';
		if (!data.password) errors.password = 'cannot be blank';
		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<div>
				<Form onSubmit={this.onSubmit} loading={loading}>
					{ errors.global && (<Message negative> 
						<Message.Header>something went wrong</Message.Header>
						<p>{errors.global}</p>
						</Message>
					)}
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
						{errors.email && <InlineError	text={errors.email} />}
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

ParentsLoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};


export default ParentsLoginForm;
