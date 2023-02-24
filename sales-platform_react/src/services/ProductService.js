import axios from "axios";

const SALES_PLATFORM_PRODUCTS_BASE_URL =
	"http://localhost:8080/api/v1/products";

class ProductService {
	getProducts() {
		return axios.get(SALES_PLATFORM_PRODUCTS_BASE_URL);
	}
	addProduct(product) {
		return axios.post(SALES_PLATFORM_PRODUCTS_BASE_URL, product);
	}
	getProductById(productId) {
		return axios.get(SALES_PLATFORM_PRODUCTS_BASE_URL + "/" + productId);
	}

	updateProduct(product, productId) {
		return axios.put(
			SALES_PLATFORM_PRODUCTS_BASE_URL + "/" + productId,
			product
		);
	}
}

export default new ProductService();
