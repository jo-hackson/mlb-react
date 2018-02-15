import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

class GenderRadioButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gender: ''};
  };

  handleChange = (event, { gender }) => {
    this.setState({ gender });
  }

  render() {

    return (
    	<div>
        <Form.Field>
          gender: <b>{this.state.gender}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='male'
            name='gender'
            gender='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='female'
            name='gender'
            gender='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    )
  }
}

export default GenderRadioButtons;
