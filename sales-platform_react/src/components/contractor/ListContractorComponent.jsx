import React, { Component } from "react";
import ContractorService from "../../services/ContractorService";
import { Link } from "react-router-dom";

class ListContractorComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contractors: [],
		};
	}
	componentDidMount() {
		ContractorService.getContractors().then(res => {
			this.setState({ contractors: res.data });
		});
	}
	render() {
		return (
			<div>
				<h2 className='text-left'>Lista kontrahentów</h2>
				<div className='row'>
					<table className='table table-striped table-bordered'>
						<thead>
							<tr>
								<th>Kod </th>
								<th>Nazwa</th>
								<th>NIP</th>
								<th>Kod pocztowy</th>
								<th>Miasto</th>
								<th>Ulica</th>
								<th>Numer telefonu</th>
								<th>Akcje</th>
							</tr>
						</thead>
						<tbody>
							{this.state.contractors.map(contractor => (
								<tr key={contractor.code}>
									<td>{contractor.code}</td>
									<td>{contractor.name}</td>
									<td>{contractor.taxIdentificationNumber}</td>
									<td>{contractor.zipCode}</td>
									<td>{contractor.city}</td>
									<td>{contractor.street}</td>
									<td>{contractor.phoneNumber}</td>
									<td>
										<Link to={`/add-contractor/${contractor.id}`}>
											<button className='btn btn-info'>
												<i
													className='bi bi-pencil-square'
													style={{ marginRight: "0.5rem" }}
												/>
												Edytuj
											</button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='row'>
					<Link to='/add-contractor/business'>
						<button className='btn btn-info' style={{ marginRight: "20px" }}>
							<i
								className='bi bi-building-add'
								style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
							/>
							Dodaj kontrahenta firmowego
						</button>
					</Link>
					<Link to='/add-contractor/customer'>
						<button className='btn btn-info'>
							<i
								className='bi bi-person-fill-add'
								style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
							/>
							Dodaj kontrahenta detalicznego
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default ListContractorComponent;
