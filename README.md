# Voluntra-Website Frontend (React/Vite)
NGO Management Platform Client Application


## Tech Stack

| Category      | Technology         | Notes                                                      |
|---------------|-------------------|------------------------------------------------------------|
| Framework     | React             | Modern component-based UI and client-side rendering.        |
| Build Tool    | Vite              | Fast development server and optimized bundling.             |
| Styling       | Tailwind CSS      | Utility-first CSS for responsive, rapid design.             |
| Routing       | React Router DOM  | Handles multi-page navigation and protected routes.         |
| HTTP Client   | Axios             | Used with Interceptors to manage secure API calls.          |
| Auth Flow     | Context API + JWT | Manages user state, stores tokens, and handles role-based redirection. |

---

## Key Features & Architecture

The application is built using a **Decoupled Architecture**, where the frontend (this repo) is entirely separate from the backend API.

### Role-Based Dashboards
The UI dynamically adapts based on the authenticated user's role:

- **Volunteer**: Tracks event enrollment, history, and downloads certificates.  
- **NGO**: Manages event creation, tracks volunteer applications, and monitors donations.  
- **Corporate**: Monitors financial contributions.  

### Multi-Step Authentication
Implements a secure login/signup flow where the user's existence is checked against the API before prompting for a password or registration details.

---

## ⚙️ Local Setup Guide

The Django Backend must be running on **http://127.0.0.1:8000/** for the application to function.

👉 Backend Repository: [Voluntra Backend](https://github.com/Saidasaradharam/Voluntra-Backend)


### Clone the Repository
```bash
git clone https://github.com/Saidasaradharam/Voluntra-Website.git
cd Voluntra-Frontend
```
Install Dependencies
`npm install`

Start the Development Server
`npm run dev`

Access the application at http://localhost:5173