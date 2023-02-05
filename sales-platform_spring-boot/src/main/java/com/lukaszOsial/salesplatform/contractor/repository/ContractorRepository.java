package com.lukaszOsial.salesplatform.contractor.repository;

import com.lukaszOsial.salesplatform.contractor.model.Contractor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractorRepository extends JpaRepository<Contractor, Long> {
}
