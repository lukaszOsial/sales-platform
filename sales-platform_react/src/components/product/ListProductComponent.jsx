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

	deleteProduct(id) {
		ProductService.deleteProduct(id).then(res => {
			this.setState({
				products: this.state.products.filter(product => product.id != id),
			});
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
										<Link to={`/add-product/${product.id}`}>
											<button
												className='btn btn-info'
												style={{ marginRight: "0.5rem" }}>
												<i
													className='bi bi-pencil-square'
													style={{ marginRight: "0.5rem" }}
												/>
												Edytuj
											</button>
										</Link>
										<button
											className='btn btn-danger'
											onClick={() => this.deleteProduct(product.id)}>
											<i
												className='bi bi-trash'
												style={{ marginRight: "0.5rem" }}
											/>
											Usuń
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='row'>
					<Link to='/add-product/-1'>
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
