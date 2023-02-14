import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContractorService from "../../services/ContractorService";

class CreateContractorComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
		this.changeTaxIdentificationHandler = this.changeTaxIdentificationNumberHandler.bind(this);
		this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
		this.changeCityHandler = this.changeCityHandler.bind(this);
		this.changeStreetHandler = this.changeStreetHandler.bind(this);
		this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
		this.saveContractor = this.saveContractor.bind(this);
	}

	saveContractor = () => {
		let contractor = {
			code: this.state.code,
			name: this.state.name,
			taxIdentificationNumber: this.state.taxIdentificationNumber,
			phoneNumber: this.state.phoneNumber,
			city: this.state.city,
			street: this.state.street,
			zipCode: this.state.zipCode,
		};
		ContractorService.createContractor(contractor);
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

	render() {
		return (
			<div>
				<div className='container'>
					<h3>Dodaj kotrahenta firmowego</h3>
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
								<label>Nazwa</label>
								<input
									name='name'
									className='form-control'
									placeholder='Nazwa firmy lub imię i nazwisko'
									value={this.state.name}
									onChange={this.changeNameHandler}
								/>
							</div>
						</div>
						<div className='form-row'>
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
						<Link to='/contractors'>
							<button className='btn btn-primary' onClick={this.saveContractor}>
								<i className='bi bi-plus-circle'></i>Dodaj
							</button>
						</Link>
						<Link to='/contractors'>
							<button className='btn btn-danger'>
								<i className='bi bi-x-circle'></i>Zamknij
							</button>
						</Link>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateContractorComponent;
