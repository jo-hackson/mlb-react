import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import GenderRadioButtons from '../pieces/GenderRadioButtons';

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
	};

	onChange = event => {
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});
	};

	onGenderChange = (event, {value}) => {
		this.setState({
			data: { ...this.state.data, gender: {value}.value }
		});
	};
		
	onSubmit = event => {
		event.preventDefault();
		console.log(this.state.data);
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		// if (Object.keys(errors).length === 0) {
		// 	this.setState({ loading: true });
		// 	this.props
		// 		.submit(this.state.data)
		// 		.catch(err => {
		// 			this.setState({ errors: err.response.data.errors, loading: false})
		// 		});
		// }
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

					<Form.Field>
						<Checkbox
							radio 
							label="male"
							name="gender"
							value="male"
							checked={data.gender === "male"}
							onChange={this.onGenderChange}
						/>
					</Form.Field>

					<Form.Field>
						<Checkbox
							radio 
							label="female"
							name="gender"
							value="female"
							checked={data.gender === "female"}
							onChange={this.onGenderChange}
						/>
					</Form.Field>

					{/* need to update gender from this value to this state  */}

					{/* <Form.Field>
						<GenderRadioButtons value={data.gender} onGenderChange={this.onGenderChange} />
					</Form.Field> */}

	        {/* gender: <b>{data.gender}</b>
					<RadioGroup onChange={this.onGenderChange}>
					  <RadioButton value="male">
					    male
					  </RadioButton>
					  <RadioButton value="female">
					    female
					  </RadioButton>
					</RadioGroup>
						{errors.gender && <InlineError text={errors.gender} />}	 */}

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