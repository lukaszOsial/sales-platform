import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import InvoiceService from "../../services/ContractorService";

export const withParams = Component => props => {
	let params = useParams();
	return <Component {...props} params={params} />;
};

class AddInvoiceComponent extends Component {
	constructor(props) {
		super(props);

		let { id } = props.params;

		this.state = {
			id: id,
			name: "",
		};
	}

	componentDidMount() {
		InvoiceService.getContractorById(this.state.id).then(res => {
			let contractor = res.data;
			this.setState({
				name: contractor.name,
			});
		});
	}

	render() {
		return (
			<div>
				<div className='row'>
					<h2>Faktura</h2>
				</div>
				<div className='row'>
					<table className='table table-striped table-bordered'>
						<thead>
							<tr>
								{/* INID */}
								<th>Nazwa</th>
								<th>Cena</th>
								<th>Vat</th>
								<th>Ilość</th>
								<th>Wartość</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<form>
					<div className='form-group col-md-4'>
						<label>Kontrahent</label>
						<input
							name='name'
							className='form-control'
							value={this.state.name}
							readOnly
						/>
					</div>
				</form>
				<Link to='/add-sale/invoice/select-contractor'>
					<button style={{ marginRight: "20px" }} className='btn btn-primary'>
						<i
							className='bi bi-plus-circle'
							style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
						/>
						Dodaj kontrahenta
					</button>
				</Link>
				<Link to='/add-sale/invoice/select-product'>
					<button style={{ marginRight: "20px" }} className='btn btn-primary'>
						<i
							className='bi bi-plus-circle'
							style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
						/>
						Dodaj produkt
					</button>
				</Link>
				<button className='btn btn-danger'>
					<i className='bi bi-trash' style={{ marginRight: "0.5rem" }} />
					Usuń wszystko
				</button>
				<button style={{ marginRight: "20px" }} className='btn btn-primary'>
					<i
						className='bi bi-plus-circle'
						style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
					/>
					Zatwierdź
				</button>
			</div>
		);
	}
}

export default withParams(AddInvoiceComponent);
