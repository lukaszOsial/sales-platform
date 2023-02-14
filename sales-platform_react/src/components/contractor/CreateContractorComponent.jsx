import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ContractorService from "../../services/ContractorService";

export const withParams = Component => props => {
	let params = useParams();
	return <Component {...props} params={params} />;
};

class CreateContractorComponent extends Component {
	constructor(props) {
		super(props);

		let { id } = props.params;

		this.state = {
			id: id,
			code: "",
			name: "",
			taxIdentificationNumber: "",
			phoneNumber: "",
			city: "",
			street: "",
			zipCode: "",
		};

		this.changeCodeHandler = this.changeCodeHandler.bind(this);
		this.changeNameHandler = this.changeNameHandler.bind(this);
		this.changeTaxIdentificationHandler =
			this.changeTaxIdentificationNumberHandler.bind(this);
		this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
		this.changeCityHandler = this.changeCityHandler.bind(this);
		this.changeStreetHandler = this.changeStreetHandler.bind(this);
		this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
		this.saveoOrUpdateContractor = this.saveoOrUpdateContractor.bind(this);
	}

	componentDidMount() {
		if (this.state.id === "business" || this.state.id === "customer") {
			return;
		} else {
			ContractorService.getContractorById(this.state.id).then(res => {
				let contractor = res.data;
				this.setState({
					code: contractor.code,
					name: contractor.name,
					taxIdentificationNumber: contractor.taxIdentificationNumber,
					phoneNumber: contractor.phoneNumber,
					city: contractor.city,
					street: contractor.street,
					zipCode: contractor.zipCode,
				});
			});
		}
	}

	saveoOrUpdateContractor = () => {
		let contractor = {
			code: this.state.code,
			name: this.state.name,
			taxIdentificationNumber: this.state.taxIdentificationNumber,
			phoneNumber: this.state.phoneNumber,
			city: this.state.city,
			street: this.state.street,
			zipCode: this.state.zipCode,
		};
		if (this.state.id === "business" || this.state.id === "customer") {
			ContractorService.createContractor(contractor);
		} else {
			ContractorService.updateContractor(contractor, this.state.id);
		}
	};

	changeCodeHandler = event => {
		this.setState({ code: event.target.value });
	};

	changeNameHandler = event => {
		this.setState({ name: event.target.value });
	};

	changeTaxIdentificationNumberHandler = event => {
		this.setState({ taxIdentificationNumber: event.target.value });
	};

	changePhoneNumberHandler = event => {
		this.setState({ phoneNumber: event.target.value });
	};

	changeCityHandler = event => {
		this.setState({ city: event.target.value });
	};

	changeStreetHandler = event => {
		this.setState({ street: event.target.value });
	};

	changeZipCodeHandler = event => {
		this.setState({ zipCode: event.target.value });
	};

	getSectionTitle() {
		if (this.state.id === "business") {
			return <h3>Dodaj kontrahenta firmowego</h3>;
		} else if (this.state.id === "customer") {
			return <h3>Dodaj kontrahenta detalicznego</h3>;
		} else {
			return <h3>Edytuj kontrahenta</h3>;
		}
	}

	getNameTitle() {
		if (this.state.id === "business") {
			return <label>Nazwa firmy</label>;
		} else {
			return <label>Imię i nazwisko</label>;
		}
	}

	getTaxIdentificationNumberInput() {
		if (this.state.id == "business") {
			return (
				<div className='form-group col-md-5'>
					<label>NIP</label>
					<input
						name='taxIdentificationNumber'
						className='form-control'
						placeholder='Numer identyfikacji podatkowej'
						value={this.state.taxIdentificationNumber}
						onChange={this.changeTaxIdentificationNumberHandler}
					/>
				</div>
			);
		} else {
			return <span></span>;
		}
	}

	getSaveButton() {
		if (this.state.id === "business" || this.state.id === "customer") {
			return (
				<button
					style={{ marginRight: "20px" }}
					className='btn btn-primary'
					onClick={this.saveoOrUpdateContractor}>
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
					onClick={this.saveoOrUpdateContractor}>
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
							<div className='form-group col-md-5'>
								<label>Kod</label>
								<input
									name='code'
									className='form-control'
									placeholder='Kod kotrahenta'
									value={this.state.code}
									onChange={this.changeCodeHandler}
								/>
							</div>
							<div className='form-group col-md-5'>
								{this.getNameTitle()}
								<input
									name='name'
									className='form-control'
									value={this.state.name}
									onChange={this.changeNameHandler}
								/>
							</div>
						</div>
						<div className='form-row'>
							{this.getTaxIdentificationNumberInput()}
							<div className='form-group col-md-5'>
								<label>Numer telefonu</label>
								<input
									name='phoneNumber'
									className='form-control'
									value={this.state.phoneNumber}
									onChange={this.changePhoneNumberHandler}
								/>
							</div>
						</div>
						<div className='form-row'>
							<div className='form-group col-md-4'>
								<label>Miasto</label>
								<input
									name='city'
									className='form-control'
									value={this.state.city}
									onChange={this.changeCityHandler}
								/>
							</div>
							<div className='form-group col-md-4'>
								<label>Ulica</label>
								<input
									name='street'
									className='form-control'
									placeholder='Ulica wraz z numerem domu lub mieszkania'
									value={this.state.street}
									onChange={this.changeStreetHandler}
								/>
							</div>
							<div className='form-group col-md-2'>
								<label>Kod pocztowy</label>
								<input
									name='zipCode'
									className='form-control'
									value={this.state.zipCode}
									onChange={this.changeZipCodeHandler}
								/>
							</div>
						</div>
						<Link to='/contractors'>{this.getSaveButton()}</Link>
						<Link to='/contractors'>
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

export default withParams(CreateContractorComponent);
