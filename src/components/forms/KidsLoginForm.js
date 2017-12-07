import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
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
			this.setState({ loading: true });
			this.props.submit(this.state.data)
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
						{errors.password && <InlineError text={errors.password} />}
					</Form.Field>
					<Button primary>login</Button>
				</Form>
		  </div>
		);
	}
}

KidsLoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default KidsLoginForm;

