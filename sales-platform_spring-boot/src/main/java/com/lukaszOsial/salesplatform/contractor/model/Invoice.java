package com.lukaszOsial.salesplatform.contractor.model;

import jakarta.persistence.*;

@Entity
@Table(name = "invoices")
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "contractor_id")
    private String contractor_id;

    @Column(name = "contractor_name")
    private String contractor_name;

    public Invoice(){

    }

    public Invoice(String name, String contractor_id, String contractor_name) {
        this.name = name;
        this.contractor_id = contractor_id;
        this.contractor_name = contractor_name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContractor_id() {
        return contractor_id;
    }

    public void setContractor_id(String contractor_id) {
        this.contractor_id = contractor_id;
    }

    public String getContractor_name() {
        return contractor_name;
    }

    public void setContractor_name(String contractor_name) {
        this.contractor_name = contractor_name;
    }
}
