# 📄 EasyPdf-Project

🌟 **EasyPDF** is your all-in-one PDF toolkit — a powerful and user-friendly web application inspired by platforms like **Smallpdf.com**, designed to simplify document handling for users through an intuitive interface and robust backend support.

---

## 🔐 Authentication Features

- Secure user login and signup functionality
- Integrated multiple OAuth providers: **Google**, **LinkedIn**, and more
- User data securely stored and managed using **MySQL**

---

## 🧰 Key Functionalities

EasyPDF offers a comprehensive set of PDF tools, including:

- 📄 **PDF ↔ Word** conversion  
- 📊 **PDF ↔ PowerPoint** conversion  
- 📉 **Compress** PDF to reduce file size  
- 🔀 **Merge** multiple PDFs into one  
- ✂️ **Split** PDFs into separate files  
- 🔄 **Rotate** PDF pages  
- ❌ **Delete** specific pages from PDFs  
- 🛡️ **Protect / Unlock** PDFs  
- ✍️ **e-Sign PDFs**  
- ✅ And many more tools to streamline your document workflow

---

## 🧑‍💻 Tech Stack

| Layer      | Tech Used                                 |
|------------|--------------------------------------------|
| Frontend   | HTML, CSS, JavaScript, **React.js**        |
| Backend    | **Java**, **Spring Boot**, RESTful APIs    |
| Database   | **MySQL**                                  |
| Auth       | Custom Login + OAuth (Google, LinkedIn)    |
| Arch       | Full-stack integration with REST API flow  |

---

## 🌐 How It Works

1. User signs up/logs in (via custom form or social login)
2. Uploads a PDF or document file
3. Selects a desired tool (e.g., convert, compress, merge)
4. Frontend sends a request to backend via REST API
5. Backend processes the document and returns a downloadable result

---

## 🚀 Highlights

- 💡 Clean and responsive UI/UX built with React
- ⚡ Real-time PDF operations with efficient server-side processing
- 🔐 Secure authentication and user management
- 🧩 Scalable architecture for adding more tools in future

---

## 📦 Project Setup (for Developers)

```bash
# Frontend setup
cd frontend-folder
npm install
npm start

# Backend setup
cd backend-folder
./mvnw spring-boot:run
