import React, { Component } from 'react';

class Parent extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			gender: ""
		}
	};

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=1')
		.then(results => {
			console.log(results);
			return results.json();
		});
	}

	render() {
		return (
			<div>this is parent information</div>
		)
	}


}

export default Parent;

