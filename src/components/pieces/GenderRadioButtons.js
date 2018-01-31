import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

class GenderRadioButtons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ''
    };
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      selectedOption: event.ctarget.value
    });
  };

  render() {
    return (
    	<div>
        <Form.Field>
          gender: <b>{this.state.selectedOption}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='male'
            name='gender'
            value='male'
            checked={this.state.selectedOption === 'male'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='female'
            name='gender'
            value='female'
            checked={this.state.selectedOption === 'female'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </div>
    )
  }
}

export default GenderRadioButtons;
