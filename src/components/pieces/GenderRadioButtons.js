import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

export default class GenderRadioButtons extends React.Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
    	<div>
        <Form.Field>
          gender: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='male'
            name='gender'
            value='male'
            checked={this.state.value === 'male'}
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
      </div>
    )
  }
}

