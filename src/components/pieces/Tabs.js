import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.selected
		};
	}

	render() {
		return (
			<div className="tabs">
				<div className="ui top attached tabular menu">
					{this._renderTitles()}
				</div>
				{this._renderContent()}
			</div>
		);
	}

	_renderContent() {
		return (
			<div className="tabs__content">
				{this.props.children[this.state.selected]}
			</div>
		);
	};

	_renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'active item' : 'item');
			return (
				<li key={index} style={eachTabStyle}>
					<a href="#" 
						className={activeClass}
						onClick={this.handleClick.bind(this, index)}>{child.props.label}
					</a>
				</li>
			);
		};
		return (
			<ul className="tabs__labels" style={tabStyles}>{this.props.children.map(labels.bind(this))}</ul>
		);
	};

	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

};

const tabStyles = {
	listStyleType: 'none',
};

const eachTabStyle = {
	display: 'inline-block'
};

Tabs.defaultProps = { selected: 0 };

Tabs.propTypes = {
		selected: PropTypes.number,
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element
		]).isRequired
	}

export default Tabs;