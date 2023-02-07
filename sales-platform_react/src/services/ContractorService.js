import axios from 'axios';

const COMPANY_MANAGEMENT_BASE_URL = "http://localhost:8080/api/v1/contractors";

class ContractorService {

    getContractors() {
        return axios.get(COMPANY_MANAGEMENT_BASE_URL);
    }

}

export default new ContractorService();