# 🛠️ FixIt – Maintenance Complaint Management System

## 📌 Problem Statement
Maintenance issues are often reported verbally and forgotten, leading to delays, lack of accountability, and unresolved problems. There is no centralized system to track complaints, assign responsibility, or monitor resolution status.

## 💡 Solution
**FixIt** is a digital complaint management system where residents can raise maintenance issues, staff can track and resolve them, and admins can monitor the entire workflow transparently.

---

## 👥 Team Details
- **Team Name:** Wardex  
- **Project Name:** FixIt  

### 👤 Team Members
- Sidhanth 
- Bhuvanashri  
- Sahith 

------

## ✨ Key Features
- Complaint creation with image support  
- Status tracking: **Pending / In Progress / Resolved**  
- Admin-based staff assignment  
- Feedback & ratings after resolution  
- Notifications on complaint updates  
- Analytics & reports  

---

## 🧩 Roles & Responsibilities

### 👤 Frontend (Resident & Admin UI)
**Core Responsibilities**
- User-facing interfaces  
- Smooth complaint flow  
- Visual status tracking  

**Features**
- Authentication (Login & Signup – Resident / Admin / Staff)
- Resident dashboard:
  - Raise complaint form  
  - Image upload UI  
  - Complaint category selection  
  - Complaint list with filters (status, date)  
  - Complaint detail view with timeline  
  - Status badges
- Admin dashboard:
  - View all complaints  
  - Assign staff  
  - Update complaint status  
  - Feedback & rating UI
- Responsive, mobile-first design  

**Tech Stack**
- React / Next.js  
- Tailwind CSS / CSS  
- Axios  

---

### 👤 Backend (APIs & Business Logic)
**Core Responsibilities**
- Authentication & authorization  
- Complaint lifecycle management  
- Role-based access control  

**Features**
- JWT-based authentication  
- Complaint CRUD APIs  
- Complaint status workflow logic  
- Staff assignment logic  
- Image upload handling (Multer / Cloudinary)  
- Feedback & rating APIs  
- Notification triggers on status changes  

**Tech Stack**
- Node.js  
- Express.js  
- JWT & bcrypt  
- Multer / Cloudinary  

---

### 👤 Database, Notifications & Deployment
**Core Responsibilities**
- Data modeling & optimization  
- Notifications & analytics  
- Deployment & system reliability  

**Features**
- Database schema design  
- Complaint indexing & query optimization  
- Email / in-app notifications:
  - Complaint raised  
  - Status updated  
  - Complaint resolved  
- Analytics:
  - Average resolution time  
  - Complaints per category  
- CSV export functionality  
- Deployment (Frontend + Backend)  
- Environment setup & error logging  

---

## 🗓️ Sprint Timeline (4 Weeks)

### 🔹 Week 1 – Planning & Core Setup
- Project setup (frontend & backend)
- Authentication system
- Role-based access
- Database schema finalization
- Environment configuration & logging

**Deliverables**
- Auth system  
- Base UI  
- Approved DB schema  
- Infrastructure plan  

---

### 🔹 Week 2 – Complaint Creation & Viewing
- Resident dashboard
- Complaint creation with image upload
- Complaint listing & status badges
- Complaint APIs & validation
- Notifications on complaint creation

**Deliverables**
- Residents can raise & view complaints  
- Notifications enabled  

---

### 🔹 Week 3 – Assignment, Status Flow & Feedback
- Admin dashboard
- Staff assignment
- Complaint timeline & status updates
- Feedback & rating system
- Analytics & CSV export

**Deliverables**
- Complete complaint workflow  
- Analytics & exports  

---

### 🔹 Week 4 – Testing, Deployment & Polish
- UI polish & responsiveness
- API testing & security checks
- Performance optimizations
- Deployment & monitoring
- Backup & rollback setup

**Deliverables**
- Live, stable production system  

---

## 🎯 Final Outcome
By the end of Week 4, **FixIt** will deliver:
- A fully functional complaint management system  
- Role-based access for all users  
- Real-time complaint tracking & notifications  
- Analytics & downloadable reports  
- Deployed and presentation-ready application  
