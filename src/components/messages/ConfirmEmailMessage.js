// functional component
import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
	<div>
		<Message info>
			<Message.Header>please verify email</Message.Header>
		</Message>
	</div>
);

export default ConfirmEmailMessage;