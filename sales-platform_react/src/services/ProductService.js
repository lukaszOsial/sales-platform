import axios from 'axios';

const SALES_PLATFORM_PRODUCTS_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getProducts() {
        return axios.get(SALES_PLATFORM_PRODUCTS_BASE_URL);
    }
    addProduct(product) {
		return axios.post(SALES_PLATFORM_PRODUCTS_BASE_URL, product);
	}

}

export default new ProductService();