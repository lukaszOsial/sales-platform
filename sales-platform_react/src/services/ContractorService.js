import axios from 'axios';

const COMPANY_MANAGEMENT_BASE_URL = "http://localhost:8080/api/v1/contractors";

class ContractorService {

    getContractors() {
        return axios.get(COMPANY_MANAGEMENT_BASE_URL);
    }

    createContractor(contractor) {
        return axios.post(COMPANY_MANAGEMENT_BASE_URL, contractor);
    }

}

export default new ContractorService();