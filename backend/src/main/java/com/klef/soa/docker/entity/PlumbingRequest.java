package com.klef.soa.docker.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "plumbing_requests")
public class PlumbingRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Customer name is required")
    @Size(min = 2, max = 100, message = "Customer name must be between 2 and 100 characters")
    @Column(nullable = false)
    private String customerName;

    @NotBlank(message = "Issue type is required")
    @Size(min = 2, max = 100, message = "Issue type must be between 2 and 100 characters")
    @Column(nullable = false)
    private String issueType;

    @NotNull(message = "Estimated cost is required")
    @PositiveOrZero(message = "Estimated cost must be zero or positive")
    @Column(nullable = false)
    private Double estimatedCost;

    @NotNull(message = "Resolved status is required")
    @Column(nullable = false)
    private Boolean resolved;

    public PlumbingRequest() {
    }

    public PlumbingRequest(String customerName, String issueType, Double estimatedCost, Boolean resolved) {
        this.customerName = customerName;
        this.issueType = issueType;
        this.estimatedCost = estimatedCost;
        this.resolved = resolved;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getIssueType() {
        return issueType;
    }

    public void setIssueType(String issueType) {
        this.issueType = issueType;
    }

    public Double getEstimatedCost() {
        return estimatedCost;
    }

    public void setEstimatedCost(Double estimatedCost) {
        this.estimatedCost = estimatedCost;
    }

    public Boolean getResolved() {
        return resolved;
    }

    public void setResolved(Boolean resolved) {
        this.resolved = resolved;
    }
}
