package com.klef.soa.docker;

import org.springframework.boot.SpringApplication;import org.springframework.boot.SpringApplication.Running;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DockerBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(DockerBackendApplication.class, args);
        System.out.println("Docker Backend Application is Running...!!!");
    }
}
