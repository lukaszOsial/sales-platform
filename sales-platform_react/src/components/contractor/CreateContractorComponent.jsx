import React, { Component } from "react";

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
	}

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

						<button type='submit' className='btn btn-primary'>
							Dodaj
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateContractorComponent;
