// functional component
import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
	<div>
		<Message info>
			<Message.Header>please verify email</Message.Header>
		</Message>
		<h1>this is dashboard page</h1>
	</div>
);

export default ConfirmEmailMessage;