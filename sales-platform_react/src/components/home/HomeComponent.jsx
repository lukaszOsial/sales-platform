import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
	render() {
		return (
			<div>
				<Link to={'/contractors'}>
					<button className='btn btn-info' style={{ marginRight: "1rem" , width: "400px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-people-fill'
							style={{ marginRight: "1rem"}}
						/>
						Kontrahenci
					</button>
				</Link>
				<Link to={'/products'}>
					<button className='btn btn-info' style={{ marginRight: "1rem" , width: "400px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-bag-fill'
							style={{ marginRight: "1rem" }}
						/>
						Artykuły
					</button>
				</Link>
			</div>
		);
	}
}

export default HomeComponent;
