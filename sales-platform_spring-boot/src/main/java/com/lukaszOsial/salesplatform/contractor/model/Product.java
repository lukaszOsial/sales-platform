package com.lukaszOsial.salesplatform.contractor.model;

import jakarta.persistence.*;

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "gross_price")
    private String grossPrice;

    @Column(name = "net_price")
    private String netPrice;

    @Column(name = "vat_rate")
    private int vatRate;

    @Column(name = "quantity")
    private int quantity;

    public Product() {

    }

    public Product(String code, String name, String type, String grossPrice, String netPrice, int vatRate, int quantity) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.grossPrice = grossPrice;
        this.netPrice = netPrice;
        this.vatRate = vatRate;
        this.quantity = quantity;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGrossPrice() {
        return grossPrice;
    }

    public void setGrossPrice(String grossPrice) {
        this.grossPrice = grossPrice;
    }

    public String getNetPrice() {
        return netPrice;
    }

    public void setNetPrice(String netPrice) {
        this.netPrice = netPrice;
    }

    public int getVatRate() {
        return vatRate;
    }

    public void setVatRate(int vatRate) {
        this.vatRate = vatRate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
