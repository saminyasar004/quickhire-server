# QuickHire - Job Board Application

QuickHire is a modern job board application built with Next.js, Nest.js, TypeScript, and PostgreSQL.

## Features

- **Job Listings**: Browse and search for jobs by title and category with real-time filtering.
- **Job Details**: View detailed job descriptions.
- **Job Application**: Apply for jobs with a functional form.
- **Admin Dashboard**: Comprehensive panel to post jobs, delete listings, and **view job applications**.
- **Swagger API**: Full documentation for all backend endpoints at `/api/docs`.
- **Responsive Design**: 100% matching Figma design for desktop and mobile.

## Tech Stack

- **Frontend**: Next.js 15+, Tailwind CSS, TypeScript, Lucide Icons.
- **Backend**: Nest.js, Sequelize-typescript, PostgreSQL, Swagger.
- **Database**: PostgreSQL.

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL

### Database Setup

1. Create a PostgreSQL database named `quickhire_db`.
   ```sql
   CREATE DATABASE quickhire_db;
   ```
2. The application is configured to use:
   - **User**: `root`
   - **Password**: `12345678`
   - **Host**: `localhost`
   - **DB Name**: `quickhire_db`

### Backend Setup

1. Go to the server directory:
   ```bash
   cd quickhire-server
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the server (Development):
   ```bash
   yarn run start:dev
   ```
4. **API Documentation**: Once running, visit `http://localhost:5000/api/docs` for the full Swagger documentation.

### Frontend Setup

1. Go to the frontend directory:
   ```bash
   cd quickhire-frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the dev server:
   ```bash
   yarn run dev
   ```
4. Visit `http://localhost:3000` to view the application.

## Endpoints Summary

- `GET /api/jobs`: List all jobs.
- `POST /api/jobs`: Create a job (Admin).
- `GET /api/jobs/:id`: Get job details.
- `DELETE /api/jobs/:id`: Delete a job (Admin).
- `POST /api/applications`: Submit application.
- `GET /api/applications/job/:jobId`: Get applications for a job (Admin).

## Test Credentials

To test the application, you can use the following pre-seeded accounts:

- **Admin Account**:
  - Email: `admin@quickhire.com`
  - Password: `admin123`
- **User Account**:
  - Email: `user@example.com`
  - Password: `user123`
