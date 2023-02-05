package com.lukaszOsial.salesplatform.contractor.model;

public class Contractor {
    private long id;
    private String code;
    private String name;
    private String taxIdentificationNumber;
    private String zipCode;
    private String city;
    private String street;
    private String phoneNumber;

    public Contractor() {

    }

    public Contractor(String code, String name, String taxIdentificationNumber, String zipCode, String city, String street, String phoneNumber) {
        this.code = code;
        this.name = name;
        this.taxIdentificationNumber = taxIdentificationNumber;
        this.zipCode = zipCode;
        this.city = city;
        this.street = street;
        this.phoneNumber = phoneNumber;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTaxIdentificationNumber() {
        return taxIdentificationNumber;
    }

    public void setTaxIdentificationNumber(String taxIdentificationNumber) {
        this.taxIdentificationNumber = taxIdentificationNumber;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
