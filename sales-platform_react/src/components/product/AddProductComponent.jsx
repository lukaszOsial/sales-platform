import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const withParams = Component => props => {
	let params = useParams();
	return <Component {...props} params={params} />;
};

class AddProductComponent extends Component {
	constructor(props) {
		super(props);

		let { id } = props.params;

		this.state = {
			id: id,
			code: "",
			name: "",
			type: "",
			grossPrice: "",
			netPrice: "",
			vatRate: "",
			quantity: "",
		};

		this.changeCodeHandler = this.changeCodeHandler.bind(this);
		this.changeNameHandler = this.changeNameHandler.bind(this);
		this.changeTypeHandler = this.changeTypeHandler.bind(this);
		this.changeGrossPriceHandler = this.changeGrossPriceHandler.bind(this);
		this.changeNetPriceHandler = this.changeNetPriceHandler.bind(this);
		this.changeVatRateHandler = this.changeVatRateHandler.bind(this);
		this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
		this.addOrUpdateProduct = this.addOrUpdateProduct.bind(this);
	}

	componentDidMount() {
		if (this.state.id === "-1") {
			return;
		} else {
			ProductService.getProductById(this.state.id).then(res => {
				let product = res.data;
				this.setState({
					code: product.code,
					name: product.name,
					type: product.type,
					grossPrice: product.grossPrice,
					netPrice: product.netPrice,
					vatRate: product.vatRate,
					quantity: product.quantity,
				});
			});
		}
	}

	addOrUpdateProduct = () => {
		let product = {
			code: this.state.code,
			name: this.state.name,
			type: this.state.type,
			grossPrice: this.state.grossPrice,
			netPrice: this.state.netPrice,
			vatRate: this.state.vatRate,
			quantity: this.state.quantity,
		};

		if (this.state.id === "-1") {
			ProductService.addProduct(product);
		} else {
			ProductService.updateProduct(product, this.state.id);
		}
	};

	changeCodeHandler = event => {
		this.setState({ code: event.target.value });
	};

	changeNameHandler = event => {
		this.setState({ name: event.target.value });
	};

	changeTypeHandler = event => {
		this.setState({ type: event.target.value });
	};

	changeGrossPriceHandler = event => {
		this.setState({ grossPrice: event.target.value });
	};

	changeNetPriceHandler = event => {
		this.setState({ netPrice: event.target.value });
	};

	changeVatRateHandler = event => {
		this.setState({ vatRate: event.target.value });
	};

	changeQuantityHandler = event => {
		this.setState({ quantity: event.target.value });
	};

	getSectionTitle() {
		if (this.state.id === "-1") {
			return <h3>Dodaj produkt</h3>;
		} else {
			return <h3>Edytuj produkt</h3>;
		}
	}

	getSaveButton() {
		if (this.state.id === "-1") {
			return (
				<button
					style={{ marginRight: "20px" }}
					className='btn btn-primary'
					onClick={this.addOrUpdateProduct}>
					<i
						className='bi bi-plus-circle'
						style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
					/>
					Dodaj
				</button>
			);
		} else {
			return (
				<button
					style={{ marginRight: "20px" }}
					className='btn btn-primary'
					onClick={this.addOrUpdateProduct}>
					<i
						className='bi bi-plus-circle'
						style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
					/>
					Zapisz zmiany
				</button>
			);
		}
	}

	render() {
		return (
			<div>
				<div className='container'>
					{this.getSectionTitle()}
					<form>
						<div className='form-row'>
							<div className='form-group col-md-2'>
								<label>Kod</label>
								<input
									name='code'
									className='form-control'
									placeholder='Kod towaru'
									value={this.state.code}
									onChange={this.changeCodeHandler}
								/>
							</div>
							<div className='form-group col-md-6'>
								<label>Pełna nazwa</label>
								<input
									name='name'
									className='form-control'
									value={this.state.name}
									onChange={this.changeNameHandler}
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='form-group col-md-2'>
								<label>Typ</label>
								<input
									name='type'
									className='form-control'
									placeholder='Kategoria'
									value={this.state.type}
									onChange={this.changeTypeHandler}
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='form-group col-md-2'>
								<label>Cena brutto</label>
								<input
									name='grossPrice'
									className='form-control'
									value={this.state.grossPrice}
									onChange={this.changeGrossPriceHandler}
								/>
							</div>
							<div className='form-group col-md-2'>
								<label>Cena netto</label>
								<input
									name='netPrice'
									className='form-control'
									value={this.state.netPrice}
									onChange={this.changeNetPriceHandler}
								/>
							</div>
							<div className='form-group col-md-2'>
								<label>VAT</label>
								<input
									name='vatRate'
									className='form-control'
									value={this.state.vatRate}
									onChange={this.changeVatRateHandler}
								/>
							</div>
							<div className='form-group col-md-2'>
								<label>Ilość</label>
								<input
									name='quantity'
									className='form-control'
									value={this.state.quantity}
									onChange={this.changeQuantityHandler}
								/>
							</div>
						</div>
						<Link to='/products'>{this.getSaveButton()}</Link>
						<Link to='/products'>
							<button className='btn btn-danger'>
								<i
									className='bi bi-x-circle'
									style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
								/>
								Zamknij
							</button>
						</Link>
					</form>
				</div>
			</div>
		);
	}
}

export default withParams(AddProductComponent);
