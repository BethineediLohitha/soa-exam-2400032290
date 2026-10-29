package com.klef.soa.docker.dto;

import jakarta.validation.constraints.*;

public class PlumbingRequestDTO {

    @NotBlank(message = "Customer name is required")
    @Size(min = 2, max = 100, message = "Customer name must be between 2 and 100 characters")
    private String customerName;

    @NotBlank(message = "Issue type is required")
    @Size(min = 2, max = 100, message = "Issue type must be between 2 and 100 characters")
    private String issueType;

    @NotNull(message = "Estimated cost is required")
    @PositiveOrZero(message = "Estimated cost must be zero or positive")
    private Double estimatedCost;

    @NotNull(message = "Resolved status is required")
    private Boolean resolved;

    public PlumbingRequestDTO() {
    }

    public PlumbingRequestDTO(String customerName, String issueType, Double estimatedCost, Boolean resolved) {
        this.customerName = customerName;
        this.issueType = issueType;
        this.estimatedCost = estimatedCost;
        this.resolved = resolved;
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
