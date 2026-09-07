# CareerGenie

An AI-powered career guidance platform built as my final year project. It helps students figure out career paths based on their skills and academics, and also includes a resume builder, ATS resume checker, and an interview prep chatbot.

The idea came from seeing a lot of students (including myself) confused about which career direction to take after college. This tries to make that decision a bit more data-driven instead of just guesswork.

## What it does

- Recommends career paths using ML models (Decision Tree, Random Forest, SVM) trained on academic and skill data
- Resume builder with guided sections
- ATS score checker — tells you how well your resume would perform against applicant tracking systems
- A chatbot for interview prep and general career questions

## Tech stack

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **ML service:** Python + Flask (separate microservice for the model predictions)
- **Database:** PostgreSQL

I split the ML part into its own Flask service instead of cramming it into the Node backend — made it easier to work on the models independently.

## Project structure

```
AI-Career-Guidence/
├── frontend/     -> React app
├── backend/      -> Express API
└── ml-service/   -> Flask app serving the ML models
```

## Running it locally

You'll need Node.js and Python installed.

```bash
git clone https://github.com/sivasankarimuthu26-create/AI-Career-Guidence.git
cd AI-Career-Guidence
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd backend
npm install
node server.js
```

ML service:
```bash
cd ml-service
pip install -r requirements.txt
python app.py
```

## Status

Still a work in progress — currently building out the ML model training pipeline and connecting it to the resume/ATS features. Not deployed yet.

## About

Built by Sivasankari M, final year CSE student.
[GitHub](https://github.com/sivasankarimuthu26-create) · [LinkedIn](https://linkedin.com/in/sivasankarim-webdev)