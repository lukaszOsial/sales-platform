import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";

class ListProductComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		ProductService.getProducts().then(res => {
			this.setState({ products: res.data });
		});
	}

	render() {
		return (
			<div>
				<div className='row'>
					<h2>Lista artykułów</h2>
				</div>
				<div className='row'>
					<table className='table table-striped table-bordered'>
						<thead>
							<tr>
								<th>Kod</th>
								<th>Nazwa</th>
								<th>Typ</th>
								<th>Cena brutto</th>
								<th>Cena netto</th>
								<th>Vat</th>
								<th>Dostępna ilość</th>
								<th>Akcje</th>
							</tr>
						</thead>
						<tbody>
							{this.state.products.map(product => (
								<tr key={product.code}>
									<td>{product.code}</td>
									<td>{product.name}</td>
									<td>{product.type}</td>
									<td>{product.grossPrice}</td>
									<td>{product.netPrice}</td>
									<td>{product.vatRate}</td>
									<td>{product.quantity}</td>
									<td>
										

										
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='row'>
					<Link to='/add-product'>
						<button className='btn btn-info' style={{ marginRight: "20px" }}>
							<i
								className='bi bi-bag-plus-fill'
								style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
							/>
							Dodaj artykuł
						</button>
					</Link>
					
				</div>
			</div>
		);
	}
}

export default ListProductComponent;
