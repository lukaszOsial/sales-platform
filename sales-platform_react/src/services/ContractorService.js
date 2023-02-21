import axios from 'axios';

const SALES_PLATFORM_BASE_URL = "http://localhost:8080/api/v1/contractors";

class ContractorService {

    getContractors() {
        return axios.get(SALES_PLATFORM_BASE_URL);
    }

    createContractor(contractor) {
        return axios.post(SALES_PLATFORM_BASE_URL, contractor);
    }

    getContractorById(contractorId) {
        return axios.get(SALES_PLATFORM_BASE_URL + "/" + contractorId);
    }

    updateContractor(contractor, contractorId) {
        return axios.put(SALES_PLATFORM_BASE_URL + '/' + contractorId, contractor);
    }

    deleteContractor(contractorId) {
        return axios.delete(SALES_PLATFORM_BASE_URL + "/" + contractorId);
    }

}

export default new ContractorService();