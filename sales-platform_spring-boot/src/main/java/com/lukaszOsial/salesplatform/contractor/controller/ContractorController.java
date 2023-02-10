package com.lukaszOsial.salesplatform.contractor.controller;

import com.lukaszOsial.salesplatform.contractor.model.Contractor;
import com.lukaszOsial.salesplatform.contractor.repository.ContractorRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
