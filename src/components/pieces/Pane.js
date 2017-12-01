import React from 'react';
import PropTypes from 'prop-types';

class Pane extends React.Component{
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
};

Pane.propTypes = {
		label: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired
	}

export default Pane;