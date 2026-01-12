Problem:

Maintenance issues are reported verbally and forgotten.

project name:

FixIt

Team name:

Wardex

Solution:

Residents raise complaints, staff track & resolve them.

Features:

Complaint creation with images
Status tracking (Pending/In Progress/Resolved)
Admin assignment
Feedback & ratings
Team Member 1 – Frontend (Resident & Admin UI)
Core Responsibilities:

User-facing interfaces
Smooth complaint flow
Visual status tracking
Features to build:

Login & signup (Resident / Admin / Staff)
Resident dashboard:
Raise complaint form
Image upload UI
Complaint category selection
Complaint list with filters (status, date)
Complaint detail view with timeline
Status badges (Pending / In Progress / Resolved)
Admin dashboard:
View all complaints
Assign staff
Update status
Feedback & rating UI after resolution
Responsive design (mobile-first)
Tech focus:

React / Next.js, Tailwind / CSS, Axios

Team Member 2 – Backend (APIs & Business Logic)
Core Responsibilities:

Authentication
Complaint lifecycle logic
Role-based access
Features to build:

JWT-based authentication
Role-based access control (Resident / Admin / Staff)
Complaint CRUD APIs
Complaint status workflow logic
Staff assignment logic
Image upload handling (Cloudinary / local)
Feedback & rating APIs
Notification triggers (status change)
Tech focus:

Node.js, Express, JWT, bcrypt, Multer / Cloudinary

Team Member 3 – Database, Notifications & Deployment
Core Responsibilities:

Data modeling
Notifications
System reliability
Features to build:

Database schema design
Complaint indexing & optimization
Email / in-app notifications:
Complaint raised
Status updated
Complaint resolved
Complaint analytics:
Avg resolution time
Complaints per category
Export complaints (CSV)
Deployment (Frontend + Backend)
Environment setup & error logging
Week Sprint Timeline

Sprint length: 4 weeks

Methodology: Agile (weekly sprints with deliverables)

Week 1 – Planning & Core Setup**

Sidhanth – Frontend

Set up React / Next.js project structure

Configure Tailwind / CSS

Design low-fidelity UI wireframes

Implement authentication pages:

Login

Signup

Role-based UI routing (Resident / Admin / Staff)

Mobile-first layout foundation

Deliverable: Auth screens + base UI layout

Bhuvanashri – Backend

Set up Node.js + Express server

Configure MongoDB connection

Implement JWT authentication

Password hashing using bcrypt

Role-based access middleware

Basic user schema (Resident / Admin / Staff)

Deliverable: Secure auth APIs with role handling

Sahith– Database & Infra

Finalize database schema:

User

Complaint

Feedback

Set up indexing strategy

Configure environment variables

Set up logging & error handling

Initial deployment setup plan

Deliverable: Approved DB schema + infra plan

Week 2 – Complaint Creation & Viewing

Sidhanth – Frontend

Resident dashboard UI

Complaint creation form

Image upload UI

Complaint category selection

Complaint list view

Status badges (Pending / In Progress / Resolved)

Deliverable: Residents can raise & view complaints

Bhuvanashri – Backend

Complaint CRUD APIs

Image upload handling (Multer / Cloudinary)

Complaint status default logic

Secure endpoints using JWT

API validation & error handling

Deliverable: Functional complaint lifecycle APIs

Sahith – Database & Infra

Optimize complaint queries

Implement indexing

Configure email / in-app notification service

Notification triggers for complaint creation

Deliverable: Notifications on complaint creation

Week 3 – Assignment, Status Flow & Feedback

Sidhanth– Frontend

Admin dashboard UI

Staff assignment UI

Complaint detail page with timeline

Status update UI

Feedback & rating UI after resolution

Deliverable: Admin & feedback flows completed

Bhuvanashri – Backend

Staff assignment logic

Status transition workflow

Feedback & rating APIs

Role-based status update permissions

Notification triggers on status changes

Deliverable: Full complaint workflow logic

Sahith – Database & Infra

Analytics queries:

Avg resolution time

Complaints per category

CSV export functionality

Notification reliability testing

Deliverable: Analytics + exports

Week 4 – Testing, Deployment & Polish

Sidhanth – Frontend

UI polish & animations

Responsive testing (mobile / tablet)

Error & empty states

Final UI bug fixes

Deliverable: Production-ready frontend

Bhvanashri – Backend

API testing (Postman / Bruno)

Security checks

Performance optimizations

Bug fixes

Deliverable: Stable, secure backend

Sahith – Database & Infra

Deploy frontend & backend

Set up monitoring & logs

Final backup & rollback plan

System reliability testing

Deliverable: Live deployed system

Final Outcome (End of Week 4)

Fully functional complaint management system

Role-based access

Real-time tracking & notifications

Analytics & reports

Deployed and presentation-ready
