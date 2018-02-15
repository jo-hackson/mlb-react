import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

class GenderRadioButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    	<div>
        <Form.Field>
          <Checkbox
            radio
            label='male'
            name='gender'
            value='male'
            onChange={this.props.onGenderChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
          radio
            label='female'
            name='gender'
            value='female'
            onChange={this.props.onGenderChange}
          />
        </Form.Field>
      </div>
    )
  }
}

export default GenderRadioButtons;
