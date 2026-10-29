# Full-Stack Plumbing Request Management System

## Overview
A complete full-stack application for managing plumbing service requests. Built with React (Bootstrap) frontend and Spring Boot backend, containerized with Docker, and CI/CD via GitHub Actions.

## Entity: PlumbingRequest
- `id` (Long, auto-generated)
- `customerName` (String)
- `issueType` (String)
- `estimatedCost` (Double)
- `resolved` (Boolean)

## Project Structure
```
fullstack-plumbing/
├── frontend/          # React + Vite + Bootstrap
│   ├── Dockerfile
│   └── ...
├── backend/           # Spring Boot (com.klef.soa.docker)
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml
└── .github/workflows/ # GitHub Actions for Docker Hub push
```

## Backend Features
- Base package: `com.klef.soa.docker`
- Packages: configuration, entity, repository, service, service.impl, dto, controller
- Endpoints:
  - `GET /` - Health check
  - `POST /Add` - Add request (no ID in body)
  - `GET /DisplayAll` - List all
  - `DELETE /Delete/{id}` - Delete by ID
- Swagger UI: http://localhost:8080/swagger-ui.html
- Validation on backend + frontend
- H2 in-memory DB (for demo)

## Frontend Features
- Responsive Bootstrap UI with Navbar
- Add form (no ID field) with client-side validation
- Display table with delete action
- Success/error messages and loading states

## How to Run Locally (without Docker)

### Backend
```bash
cd backend
mvn spring-boot:run
```
Swagger: http://localhost:8080/swagger-ui.html

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```
App: http://localhost:5173 (API points to localhost:8080)

## Docker Compose
```bash
# Build and run
docker-compose up --build

# Frontend: http://localhost:3000
# Backend:  http://localhost:8080
# Swagger:  http://localhost:8080/swagger-ui.html
```

## GitHub Actions
- Requires secrets: `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`
- On push to main/master builds and pushes:
  - `docker-frontend-2400030107`
  - `docker-backend-2400030107`
- Replace `2400030107` with your Student ID everywhere.

## Notes
- Replace Student ID `2400030107` with your actual ID in image names, docker-compose, and workflow.
- For production Docker Hub images, update the image references in docker-compose.yml after pushing.
- No JWT authentication as per requirements.
