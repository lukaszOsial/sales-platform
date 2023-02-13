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
									onChange={this.changeCode}
								/>
							</div>
							<div className='form-group col-md-5'>
								<label>Nazwa</label>
								<input
									name='name'
									className='form-control'
									placeholder='Nazwa firmy lub imię i nazwisko'
									value={this.state.name}
									onChange={this.changeName}
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
									onChange={this.changeTaxIdentificationNumber}
								/>
							</div>
							<div className='form-group col-md-5'>
								<label>Numer telefonu</label>
								<input
									name='phoneNumber'
									className='form-control'
									value={this.state.phoneNumber}
									onChange={this.changePhoneNumber}
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
									onChange={this.changeCity}
								/>
							</div>
							<div className='form-group col-md-4'>
								<label>Ulica</label>
								<input
									name='street'
									className='form-control'
									placeholder='Ulica wraz z numerem domu lub mieszkania'
									value={this.state.street}
									onChange={this.changeStreet}
								/>
							</div>
							<div className='form-group col-md-2'>
								<label>Kod pocztowy</label>
								<input
									name='zipCode'
									className='form-control'
									value={this.state.zipCode}
									onChange={this.changeZipCode}
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
