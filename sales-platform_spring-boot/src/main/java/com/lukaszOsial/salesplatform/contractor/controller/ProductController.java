package com.lukaszOsial.salesplatform.contractor.controller;

import com.lukaszOsial.salesplatform.contractor.model.Product;
import com.lukaszOsial.salesplatform.contractor.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    //get all products method
    @GetMapping("/products")
    public List<Product> getAllContractors() {
        return productRepository.findAll();
    }
}
