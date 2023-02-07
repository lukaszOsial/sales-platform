import { Component } from "react";
import ContractorService from "../../services/ContractorService";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Kod</TableCell>
            <TableCell align="right">Nazwa</TableCell>
            <TableCell align="right">NIP</TableCell>
            <TableCell align="right">Kod pocztowy</TableCell>
            <TableCell align="right">Miasto</TableCell>
            <TableCell align="right">Ulica</TableCell>
            <TableCell align="right">Numer telefonu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.contractors.map((contractor) => (
            <TableRow
              key={contractor.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contractor.code}
              </TableCell>
              <TableCell align="right">{contractor.name}</TableCell>
              <TableCell align="right">{contractor.taxIdentificationNumber}</TableCell>
              <TableCell align="right">{contractor.zipCode}</TableCell>
              <TableCell align="right">{contractor.city}</TableCell>
              <TableCell align="right">{contractor.street}</TableCell>
              <TableCell align="right">{contractor.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
	}
}

export default ListContractorComponent;
