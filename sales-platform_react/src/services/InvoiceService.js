import axios from "axios";

const SALES_PLATFORM_INVOICE_BASE_URL =
	"http://localhost:8080/api/v1/add-sale/invoice";

class InvoiceService {
	getContractorById(contractorId) {
		return axios.get(SALES_PLATFORM_INVOICE_BASE_URL + "/" + contractorId);
	}
}

export default new InvoiceService();