import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class ParentsLoginForm extends React.Component {
	
	state = {
		data: {
			email: '',
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
		if (!Validator.isEmail(data.email)) errors.email = 'invalid email';
		if (!data.password) errors.password = 'cannot be blank';
		return errors;
	};

	render() {
		const { data, errors } = this.state;

		return (
			<div>
				<Form onSubmit={this.onSubmit}>
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
