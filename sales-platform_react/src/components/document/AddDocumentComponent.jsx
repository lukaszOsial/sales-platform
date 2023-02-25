import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddDocumentComponent extends Component {
	render() {
		return (
			<div>
				<Link to={'/add-document/receipt'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-file-earmark-plus'
							style={{ marginRight: "1rem"}}
						/>
						Paragon
					</button>
				</Link>
				<Link to={'/add-document/invoice'}>
					<button className='btn btn-info' style={{ margin: "1rem" , width: "380px", height: "250px", fontSize: "2.2rem"}}>
						<i
							className='bi bi-file-earmark-plus'
							style={{ marginRight: "1rem" }}
						/>
						Faktura
					</button>
				</Link>
			</div>
		);
	}
}

export default AddDocumentComponent;