package com.klef.soa.docker.service;

import com.klef.soa.docker.dto.PlumbingRequestDTO;
import com.klef.soa.docker.entity.PlumbingRequest;

import java.util.List;

public interface PlumbingRequestService {
    PlumbingRequest addRequest(PlumbingRequestDTO dto);
    List<PlumbingRequest> getAllRequests();
    String deleteRequest(Long id);
}
