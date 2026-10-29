package com.klef.soa.docker.repository;

import com.klef.soa.docker.entity.PlumbingRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlumbingRequestRepository extends JpaRepository<PlumbingRequest, Long> {
}
