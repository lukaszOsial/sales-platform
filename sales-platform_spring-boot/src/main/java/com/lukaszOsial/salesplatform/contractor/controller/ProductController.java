package com.lukaszOsial.salesplatform.contractor.controller;

import com.lukaszOsial.salesplatform.contractor.exception.ResourceNotFoundException;
import com.lukaszOsial.salesplatform.contractor.model.Product;
import com.lukaszOsial.salesplatform.contractor.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    //get all products method
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    //add product method
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    //get product by id
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nie istnieje towar o numerze identyfikacyjnym: " + id));
        return ResponseEntity.ok(product);
    }

    //update product method
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nie istnieje produkt o numerze identyfikacyjnym: " + id));
        product.setCode(productDetails.getCode());
        product.setName(productDetails.getName());
        product.setType(productDetails.getType());
        product.setGrossPrice(productDetails.getGrossPrice());
        product.setNetPrice(productDetails.getNetPrice());
        product.setVatRate(productDetails.getVatRate());
        product.setQuantity(productDetails.getQuantity());

        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nie istnieje produkt o numerze identyfikacyjnym: " + id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
