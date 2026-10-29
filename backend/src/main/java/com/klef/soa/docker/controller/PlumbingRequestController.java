package com.klef.soa.docker.controller;

import com.klef.soa.docker.dto.PlumbingRequestDTO;
import com.klef.soa.docker.entity.PlumbingRequest;
import com.klef.soa.docker.service.PlumbingRequestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
@Tag(name = "Plumbing Request API", description = "CRUD operations for Plumbing Requests")
public class PlumbingRequestController {

    @Autowired
    private PlumbingRequestService service;

    @GetMapping
    @Operation(summary = "Health check", description = "Returns a message confirming the service is running")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("CRUD Service is running - Plumbing Request Backend");
    }

    @PostMapping("/Add")
    @Operation(summary = "Add a new plumbing request", description = "Creates a new plumbing request. ID is auto-generated.")
    public ResponseEntity<?> addRequest(@Valid @RequestBody PlumbingRequestDTO dto) {
        try {
            PlumbingRequest saved = service.addRequest(dto);
            return new ResponseEntity<>(saved, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding request: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/DisplayAll")
    @Operation(summary = "Get all plumbing requests", description = "Returns a list of all plumbing requests")
    public ResponseEntity<List<PlumbingRequest>> getAll() {
        List<PlumbingRequest> list = service.getAllRequests();
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/Delete/{id}")
    @Operation(summary = "Delete a plumbing request", description = "Deletes the plumbing request with the given ID")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        String result = service.deleteRequest(id);
        if (result.contains("not found")) {
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(result);
    }
}
