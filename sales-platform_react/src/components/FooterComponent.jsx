import React, { Component } from "react";

class FooterComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div>
				<footer className='footer'>
					<p>Made by</p>
					<img src='/images/logo.png' alt='logo' />
				</footer>
			</div>
		);
	}
}

export default FooterComponent;
