import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div>
				<header>
					<nav className='navbar navbar-expend-md navbar-dark bg-dark'>
						<h2 className='navbar-brand'>Sales platform</h2>
						<Link to='/'>
							<button type='button' className='btn btn-info'>
								<i className='bi bi-house'></i>Home
							</button>
						</Link>
					</nav>
				</header>
			</div>
		);
	}
}

export default HeaderComponent;
