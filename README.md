# 🏥 Electronic Medical Record (EMR) System

> **Status:** 🚧 _Work in Progress_  
> This project is currently under development. Features and modules are being actively built and improved.

---

## 📋 Overview

The **Electronic Medical Record (EMR)** System is a full-stack web application designed to streamline healthcare data management for medical institutions. It enables **admins, doctors, nurses, lab staff, and patients** to securely manage and access medical records, appointments, and user information - following modern standards of **authentication**, **authorization**, and **data privacy**.

This system is built with **scalability**, **role-based access**, and **real-world EMR workflows** in mind.

## ⚙️ Tech Stack

### 🖥️ Frontend
- **React (Vite + TypeScript)** for building a fast, modular, and scalable user interface
- **Redux Toolkit** for efficient global state management and predictable data flow 
- **Axios** for API communication
- **Tailwind CSS** for modern, responsive styling
- **React Router** for navigation and routing

### 🧠 Backend
- **Node.js + Express.js**
- **Prisma ORM** for database access
- **PostgreSQL** as the primary database
- **Keycloak** for authentication and role-based access control (AuthN & AuthZ)

### 🧰 Tools & Utilities
- **Docker** – for containerization and easy deployment across environments  
- **RESTful APIs** – for structured communication between frontend and backend  
- **Middleware** – for role-based permissions and request validation  
- **JWT & Keycloak tokens** – for secure authentication and authorization  
- **Dotenv** – for environment configuration and secret management  

---

## 🏗️ Current Features

✅ **User Roles & Permissions**
- Admin, Doctor, Nurse, and Patient roles with restricted access.  
- Role-based routing and authorization handled via middleware.

✅ **Authentication & Authorization**
- Integrated **Keycloak** for secure user management.  
- Backend authentication and token validation setup.

✅ **Database Setup**
- Prisma schema with initial seeds and migrations.  
- Implemented models include:
  - **Admin**, **Doctor**, **Patient**  
  - **Medical Records**, **Clinical Details**, **Vitals Records**, **History**, **Diagnosis**, **Referrals**  
  - **Laboratory Tests**, **Medication Inventory**, **Prescriptions**
- All models are relational and designed to support role-based access and real-world EMR workflows.

✅ **Dashboard Layout (Frontend)**
- Common dashboard UI for all users with role-based section access.  
- Unauthorized access shows `403 Forbidden` message.

✅ **Patient Module**
- Fully implemented **Patient tab** with all sub-tabs (e.g., personal info, medical records, clinical details, medication).  
- CRUD operations completed.  
- Pending **QA/testing**.

✅ **Laboratory Module**
- Fully implemented **Laboratory tab** with lab results management.  
- CRUD operations completed.  
- Pending **QA/testing**.

✅ **Medication Inventory Module**
- Fully implemented **Medication Inventory tab** for managing medicines and stock.  
- CRUD operations completed.  
- Pending **QA/testing**.

---

## 🚀 Upcoming Features

🔹 User Registration Flow Through EMR (Phase 2)  
🔹 Doctor-Patient linking  
🔹 Appointment scheduling  
🔹 Prescription management  
🔹 Report generation (PDF exports) 
🔹 Audit logs & activity tracking  
🔹 Integration with external health APIs for medication and lab data 
🔹 Dashboard analytics 

---

## 🔐 Role-Based Access

| Role | Permissions |
|------|--------------|
| **Admin** | Manage all users, view all records, control system access |
| **Doctor** | View and update assigned patients, add diagnoses, manage prescriptions |
| **Nurse** | View limited patient info and assist in record updates |
| **Laboratory Staff** | Manage and update lab test results |
| **Patient** | View personal records, prescriptions, and lab results |

---

## 🧩 Project Structure

```text
EMR-System/
├── server/ # Backend (Node.js + Express + Prisma)
│ ├── controllers/ # Logic for Admin, Doctor, Patient, Lab, etc.
│ ├── middleware/ # Role-based access control
│ ├── routes/ # API endpoints
│ ├── utils/ # Helper functions (e.g., getLoggedInUser)
│ ├── prisma/ # Prisma schema, seeds, migrations
│ ├── keycloak/ # keycloak.js for Keycloak integration & kcAdminClient.js for Keycloak admin client setup
│ ├── index.js # Server entry point
│ └── package.json
│
├── client/ # Frontend (React + Vite + TypeScript)
│ ├── src/
│ │ ├── api/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── constants/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── store/
│ │ ├── styles/
│ │ ├── types/
│ │ └── utils/
│ ├── public/
│ └── package.json
```

---

## 🌐 Live Demo
🔗 [View Deployed App](https://emr-rlh7hc0cm-koshis-projects-f908a45d.vercel.app/)

### 🧪 Demo Credentials
| Role | Username | Password |
|------|-----------|-----------|
| Admin | admin@example.com | admin123 |
| Doctor | doctor@example.com | doctor123 |
| Patient | patient@example.com | patient123 |


## ⚙️ Local Development Setup
If you’d like to run this project locally, follow these steps:

1️. Clone the repository  
2️. Create a `.env` file in `/server` with your database and Keycloak configurations
3. Run Prisma migrations and start the backend  
4. Run the frontend using `npm run dev`

> You’ll need your own database and Keycloak instance for local development.


## 🧪 Testing (Planned)

- Jest and Supertest for backend tests.
- React Testing Library for frontend components.

## 🤝 Contributing

This project is currently being developed individually, but contributions and feedback are welcome once the core modules are complete.
If you'd like to suggest improvements, feel free to open an issue or submit a pull request.

## 👩‍💻 Author

### Koshila Gunasinghe
🎓 BSc (Hons) in Computer Science – University of Westminster  
💻 Passionate about full-stack development (MERN / PERN Stack)  
🌍 Building projects that make a real-world impact
