import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddInvoiceComponent extends Component {
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
						<input name='code' className='form-control' />
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
				<button style={{ marginRight: "20px" }} className='btn btn-primary'>
					<i
						className='bi bi-plus-circle'
						style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
					/>
					Dodaj produkt
				</button>
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

export default AddInvoiceComponent;
