# Secure Expense Tracker Front-End

A responsive web application for tracking expenses securely. Built with **Next.js, React.js, TypeScript,** and **TailwindCSS**, this front-end connects to a robust backend using **Node, Express, MongoDB, GraphQL, WebSockets**, and **Apollo Server** for real-time data synchronization.

----
### ‼️ ATTENTION ‼️
#### There are no user accounts for this application at the time of writing. 
#### Please do ***NOT*** enter sensitive information. **Thank you!**
----

## 📁 Folder Structure
```plaintext
secure-expense-tracker-front-end/
├── components/           # Reusable React components
├── pages/                # Next.js pages
├── public/               # Static assets like images or icons
├── styles/               # TailwindCSS and global styles
├── utils/                # Utility functions
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```
## 🛠️ Tools Used
- **Framework**: Next.js, React.js
- **Languages**: TypeScript, JavaScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel

## ▶️ Getting Started
Follow these steps to set up the project locally:

#### 1️⃣ **Clone the repository**:
   ```bash
   git clone https://github.com/G-Hensley/secure-expense-tracker-front-end.git
   ```
#### 2️⃣ Navigate into the folder:
   ```bash
   cd secure-expense-tracker-front-end
   ```
#### 3️⃣ Install dependencies:
   ```bash
   npm install
   ```
#### 4️⃣ Run development server:
   ```bash
   npm run dev
   ```
#### 5️⃣ Open http://localhost:3000 in your browser.

---

## ☁️ Deployment

The front-end is deployed on Vercel. To deploy your own version:

#### 1️⃣ Push your code to a GitHub repository.

#### 2️⃣ Connect your repository to Vercel via the Vercel dashboard.

#### 3️⃣ Configure any necessary environment variables.

#### 4️⃣ Deploy using Vercel’s automatic deployment feature.

##### ‼️***The backend is deployed separately on Heroku (see the note at the bottom for details).***‼️

---

## 🔐 Security Analysis

My name is **Brenda Hensley**, and I am a recent graduate of Western Governors University’s Bachelor of Science in Cybersecurity and Information Assurance program. I hold multiple industry certifications, including CompTIA Security+, CySA+, and PenTest+, among others.

I have been actively enhancing my hands-on skills to expand my expertise and gain practical experience in various security domains. For this project, my husband, Gavin Hensley, developed a web application, and I conducted security testing to identify vulnerabilities and verify implemented solutions. This document provides an overview of my initial security testing process and some of the thought processes behind my approach.

### 🛡️ My Role  
- **Security & Vulnerability Testing** – Conducted security assessments to identify and analyze potential risks in the web application and API.  
- **Solution Implementation Verification** – Verified the effectiveness of implemented security fixes by re-testing vulnerabilities and ensuring proper mitigation.  
- **Automated Security Scanning** – Used tools like **OWASP ZAP, Aikido Security, and ESLint** to identify and document security flaws.  
- **Threat Analysis & Reporting** – Evaluated risks associated with detected vulnerabilities and documented findings with remediation recommendations.  
- **Secure Development Recommendations** – Provided feedback on secure coding practices to prevent recurring vulnerabilities.  

## My Process

### 1️⃣ API & Web Application Testing  
- Reviewed **API endpoints** to identify potential security risks.  
- Validated **input handling** to detect possible injection attacks.  
- Ran **automated scans** to identify vulnerabilities in the web application.  
- Confirmed **API responses** do not expose sensitive information.  

### 2️⃣ Input Validation & Sanitization  
- Checked for **SQL injection risks** by testing database queries.  
- Reviewed **user input fields** to ensure proper sanitization.  
- Tested for potential **XSS vulnerabilities** in input fields and API responses.  

### 3️⃣ Automated Security Scanning  
- Used **OWASP ZAP** to scan for security flaws.  
- Identified and implemented **fixes** for detected vulnerabilities.  
- Confirmed that fixes were effective—**OWASP ZAP was unable to rerun the scan** after implementation.  

### 4️⃣ Code & Dependency Security Analysis  
- Used **ESLint** for static code analysis to detect potential issues.  
- Ran **Aikido Security** to identify vulnerabilities in dependencies.  
- Identified and implemented **fixes**.  
- Confirmed implemented solutions were successful by re-running scans and **verifying the absence of vulnerabilities**.  

### 5️⃣ Logging & Error Handling  
- Verified that **error messages** do not leak system details.  
- Checked that **logs do not store sensitive data** in plaintext.  

---

## 🛠️ Tools Used  
- **Postman** – API testing  
- **OWASP ZAP** – Web application security scanning  
- **ESLint** – Static code analysis  
- **Aikido Security** – Dependency vulnerability scanning  

### Keep an eye out for more updates!
---

Contributing

We welcome contributions! Feel free to fork the repository and submit pull requests to enhance the project.
License

This project is licensed under the MIT License.

Note: This repository contains the front-end code. The backend, built with Node, Express, MongoDB, GraphQL, WebSockets, and Apollo Server, is hosted on Heroku and resides in a separate repository: [https://github.com/G-Hensley/secure-expense-tracker-back-end].
