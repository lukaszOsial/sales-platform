package com.lukaszOsial.salesplatform.contractor.controller;

import com.lukaszOsial.salesplatform.contractor.exception.ResourceNotFoundException;
import com.lukaszOsial.salesplatform.contractor.model.Contractor;
import com.lukaszOsial.salesplatform.contractor.repository.ContractorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ContractorController {

    @Autowired
    private ContractorRepository contractorRepository;

    //get all contractors method
    @GetMapping("/contractors")
    public List<Contractor> getAllContractors() {
        return contractorRepository.findAll();
    }

    //create contractor method
    @PostMapping("/contractors")
    public Contractor createContractor(@RequestBody Contractor contractor) {
        return contractorRepository.save(contractor);
    }

    //get contractor by id
    @GetMapping("/contractors/{id}")
    public ResponseEntity<Contractor> getContractorById(@PathVariable Long id) {
        Contractor contractor = contractorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nie istnieje kontrahent o numerze identyfikacyjnym: " + id));
        return ResponseEntity.ok(contractor);
    }

    //update contractor method
    @PutMapping("/contractors/{id}")
    public ResponseEntity<Contractor> updateContractor(@PathVariable Long id, @RequestBody Contractor contractorDetails) {
        Contractor contractor = contractorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nie istnieje kontrahent o numerze identyfikacyjnym: " + id));
        contractor.setCode(contractorDetails.getCode());
        contractor.setName(contractorDetails.getName());
        contractor.setTaxIdentificationNumber(contractorDetails.getTaxIdentificationNumber());
        contractor.setZipCode(contractorDetails.getZipCode());
        contractor.setCity(contractorDetails.getCity());
        contractor.setStreet(contractorDetails.getStreet());
        contractor.setPhoneNumber(contractorDetails.getPhoneNumber());

        Contractor updatedContractor = contractorRepository.save(contractor);
        return ResponseEntity.ok(updatedContractor);
    }
}
