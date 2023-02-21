package com.lukaszOsial.salesplatform.contractor.repository;

import com.lukaszOsial.salesplatform.contractor.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
