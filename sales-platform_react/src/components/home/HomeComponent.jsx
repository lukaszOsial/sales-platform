import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
	render() {
		return (
			<div>
				<Link to={'/contractors'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-people-fill'
							style={{ marginRight: "1rem"}}
						/>
						Kontrahenci
					</button>
				</Link>
				<Link to={'/products'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-bag-fill'
							style={{ marginRight: "1rem" }}
						/>
						Artykuły
					</button>
				</Link>
				<Link to={'/documents'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-files'
							style={{ marginRight: "1rem" }}
						/>
						Dokumenty handlowe
					</button>
				</Link>
				<Link to={'/add-document'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-file-earmark-plus'
							style={{ marginRight: "1rem" }}
						/>
						Nowy dokument
					</button>
				</Link>
			</div>
		);
	}
}

export default HomeComponent;
