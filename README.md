# 🧠 Aditya Pranjal — AI-Powered Portfolio

<p align="center">
  <img src="./Screenshot%20(80).png" alt="Portfolio Hero Screenshot" width="100%" />
</p>

> **Building intelligent systems with clarity & purpose.**  
> A portfolio that doesn’t just show projects — it reasons about them.

---

## ✨ What makes this portfolio different?

This is **not** a static website.  
It’s a **living system**.

- 🤖 **AI assistant** that answers recruiter-style questions
- 📅 **Google Calendar integration** to infer real availability (privacy-safe)
- 🧠 **Strong domain modeling** with strict TypeScript guarantees
- ⚙️ **Production-grade architecture**, deployed and evolving

This portfolio is designed to answer one question:

> _How does this developer think?_

---

## 🚀 Live Demo

🔗 **Portfolio**  
👉 https://pranjalportfolio-ivory.vercel.app/

> Deployed on Vercel · Continuously updated · Production-ready

---

## 🧩 Core Features

### 🤖 AI Assistant

- Responds to HR & recruiter questions
- Understands availability, projects, and experience
- Built to be **explainable**, not gimmicky

### 📅 Smart Availability Engine

- Reads Google Calendar **with explicit OAuth consent**
- Converts raw events into **privacy-safe availability blocks**
- No event titles exposed. Ever.

### 🧠 Domain-Driven Design

- Clear separation of:
  - domain logic
  - integrations
  - UI
- Strong enums and types prevent silent bugs
- Mocks obey the same rules as production data

### ⚡ Modern Tech Stack

- **Next.js (App Router)**
- **TypeScript (strict)**
- **Google APIs (OAuth2)**
- **Vercel (production deployment)**

---

## 🛠 Architecture Snapshot

src/
├─ app/ → Next.js routes & UI
├─ domain/
│ └─ calendar/ → Core availability logic (source of truth)
├─ integrations/
│ └─ google-calendar/ → OAuth + event translation
├─ components/ → Reusable UI components
└─ lib/ → Shared utilities

**Principle**

> Domain logic never depends on UI or APIs.  
> Integrations adapt data into the domain — not the other way around.

---

## 🔐 Privacy by Design

This project intentionally avoids:

- exposing raw calendar event titles
- leaking sensitive metadata
- coupling UI to private data

Instead, it derives **just enough signal** to answer:

> “Is Aditya available on this date?”

Nothing more.

---

## 📌 Why this project exists

Most portfolios answer:

- _What have you built?_

This one also answers:

- _How do you reason about systems?_
- _How do you handle real integrations?_
- _How do you enforce correctness at scale?_

It’s meant to be read — not just clicked.

---

## 🧭 Roadmap (Post v1)

Planned evolutions:

- Demo mode (no Google auth required)
- Deeper AI context about projects
- Availability confidence scoring
- Changelog & version history
- Custom domain

---

## 👋 About Me

**Aditya Pranjal**  
Software Engineer · Explorer · Problem Solver

I enjoy building systems that:

- respect constraints
- surface intent
- and age gracefully in production

---

## 📬 Get in touch

- Portfolio Contact Page
- LinkedIn (linked on site)
- GitHub Issues / Discussions

---

> **Portfolio v1.0**  
> _Last updated: Jan 2026_
