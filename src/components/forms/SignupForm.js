import React from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import Gender from '../pieces/GenderRadioButtons';

class SignupForm extends React.Component {

	state = {
		data: {
			email: '',
			password: '',
			lastName: '',
			gender: ''
		},
		loading: false,
		errors: {}
	}

	onChange = event =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});

	onGenderChange = event =>
		this.setState({
			gender: event.currentTarget.value
		});

	handleChange = (e) => 
		this.setState({ 
			data: { gender: e.currentTarget.value }
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
		if (!data.lastName) errors.lastName = 'cannot be blank';
		if (!data.gender) errors.gender = 'select a gender';

		return errors;
	};

	render() {
		const { data, errors, loading, gender } = this.state;

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
					<Form.Field error={!!errors.lastName}>
						<label htmlFor="lastName">last name</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							placeholder="last name"
							value={data.lastName}
							onChange={this.onChange}
						/>
						{errors.lastName && <InlineError text={errors.lastName} />}
					</Form.Field>

					{ /* need to figure out how to get state of another object */ }
					{ /* <Gender  /> */}
					<Form.Field error={!!errors.gender}>
	          gender: <b>{data.gender}</b>
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label="male"
	            name="gender"
	            value="male"
	            checked={true}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label='female'
	            name='gender'
	            value='female'
	            checked={this.state.value === 'female'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
					{errors.gender && <InlineError text={errors.gender} />}

					<Button primary>signup</Button>
				</Form>
		  </div>
		);
	}
}

SignupForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default SignupForm;