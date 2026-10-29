package com.klef.soa.docker.service.impl;

import com.klef.soa.docker.dto.PlumbingRequestDTO;
import com.klef.soa.docker.entity.PlumbingRequest;
import com.klef.soa.docker.repository.PlumbingRequestRepository;
import com.klef.soa.docker.service.PlumbingRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlumbingRequestServiceImpl implements PlumbingRequestService {

    @Autowired
    private PlumbingRequestRepository repository;

    @Override
    public PlumbingRequest addRequest(PlumbingRequestDTO dto) {
        PlumbingRequest request = new PlumbingRequest();
        request.setCustomerName(dto.getCustomerName());
        request.setIssueType(dto.getIssueType());
        request.setEstimatedCost(dto.getEstimatedCost());
        request.setResolved(dto.getResolved());
        return repository.save(request);
    }

    @Override
    public List<PlumbingRequest> getAllRequests() {
        return repository.findAll();
    }

    @Override
    public String deleteRequest(Long id) {
        Optional<PlumbingRequest> optional = repository.findById(id);
        if (optional.isPresent()) {
            repository.deleteById(id);
            return "Plumbing request with ID " + id + " deleted successfully.";
        } else {
            return "Plumbing request with ID " + id + " not found.";
        }
    }
}
