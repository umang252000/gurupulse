# GuruPulse  
### Offline-First AI Classroom Copilot for Just-In-Time Teacher Support

<img width="1536" height="1024" alt="ChatGPT Image Jan 12, 2026, 07_38_08 PM" src="https://github.com/user-attachments/assets/76d09584-45ad-4fc2-8d3e-93801d4ee0bf" />

---

## Problem Statement

Teachers in India’s public education system frequently face **in-the-moment classroom challenges** — student disengagement, multi-grade classrooms, conceptual confusion, and behavior management — that demand **immediate, context-specific guidance**.

However, the current academic support architecture (CRPs, ARPs, BRPs) is:
- **Periodic** (monthly or less)
- **Delayed** (feedback arrives weeks later)
- **Generic** (non-actionable advice)

As a result:
- Teachers revert to rote methods for classroom control
- Innovative pedagogical practices fail at implementation
- Professional burnout increases, especially in rural and low-connectivity settings

There is **no scalable, low-bandwidth, just-in-time support system** that treats teachers as skilled professionals working in live classrooms.

---

## 💡 Solution Overview

**GuruPulse** is an **offline-first, voice-enabled AI classroom copilot** that provides **instant, personalized pedagogical and classroom-management guidance** to teachers — exactly when they need it.

GuruPulse works in **real classroom conditions**:
- Low or no internet
- Time-constrained teachers
- Multilingual, resource-limited environments

Instead of delayed supervision, GuruPulse enables **real-time professional partnership**.

---

## 🎯 Core Use Case (Live Classroom Scenario)

1. A teacher encounters a classroom challenge  
   _(e.g., “Students are confused about zero in subtraction”)_
2. The teacher selects:
   - Grade
   - Subject
3. The teacher **speaks or types** the issue
4. GuruPulse instantly returns:
   - **What to do right now**
   - **Why this works**
   - **What to try next**
5. The response is **cached locally** for offline reuse

---

## 🚀 Key Features

### Offline-First by Design
- Local caching of verified guidance
- Works in weak or no-internet environments
- Graceful offline fallback

### Voice-First Interaction
- Teachers can speak instead of typing
- Designed for live classroom stress
- Accessible and inclusive

### Responsible AI Decision Engine
- Rule-based + verified pedagogical knowledge
- No hallucinations
- Deterministic, explainable outputs

### 📚 Context-Aware Guidance
- Grade-specific
- Subject-specific
- Situation-specific (not generic advice)

### Teacher-Centric UX
- Minimal cognitive load
- Clean, professional interface
- Built for speed and clarity

---

## System Architecture
```bash
Teacher UI (Next.js + Tailwind)
↓
Context Selection (Grade + Subject)
↓
Decision Engine
├── Offline Knowledge Base (JSON)
├── Rule-Based Matching
└── (Future) AI via RAG
↓
Structured Output
├── What to do now
├── Why this works
└── Next step
↓
Local Cache (Offline-First)
```

---

## Tech Stack

| Layer | Technology | Reason |
|------|-----------|--------|
| Frontend | Next.js (App Router) | Fast, modern, deployable |
| Styling | Tailwind CSS | Professional UI quickly |
| Backend | API Routes (Node) | Clean & simple |
| Decision Engine | Rule-based logic | Reliable & explainable |
| Offline Support | localStorage | Low-bandwidth friendly |
| Voice Input | Browser Speech API | Demo-ready, no backend |

---

## Reliability & Safety

- ✔ Deterministic responses (no hallucinations)
- ✔ Offline caching ensures continuity
- ✔ No student data collected or stored
- ✔ Teacher inputs remain local
- ✔ Aligned with Digital Public Goods principles

---

## 📈 Impact

### Immediate Impact
- Reduces teacher stress during live instruction
- Prevents regression to rote teaching
- Builds confidence to experiment pedagogically

### Systemic Impact
- Reduces dependency on frequent physical visits
- Enables scalable teacher support
- Strengthens classroom practice at scale

### Equity Impact
- Designed for rural, low-connectivity environments
- Voice-first accessibility
- Inclusive of diverse classroom contexts

---

## 📊 Key Success Metrics

- Reduction in **query-to-resolution time**
- Frequency of **on-demand teacher interactions**
- Teacher self-reported confidence improvement
- Sustained usage in low-connectivity environments

---

## Alignment

- **NEP 2020**: Continuous, need-based teacher professional development
- **Shikshagraha Vision**: System-level capacity building
- **Digital Public Goods**: Privacy, accessibility, scalability

---

## How to Run Locally (GitHub Codespaces)

```bash
npm install
npm run dev
Open:
http://localhost:3000
```

### Demo Instructions

###### 1.Select:
- Grade → Grade 3–5
- Subject → Math

###### 2.Speak or type:

Students are confused about zero in subtraction

###### 3.Click Get Classroom Help
###### 4.Observe:
- Immediate action
- Pedagogical reasoning
- Next-step strategy

Turn internet off → repeat → response still works

### Future Roadmap

- Multilingual voice support
- CRP/BRP dashboards
- AI-assisted personalization via RAG
- State-level deployments
- Integration with teacher training institutions

#### 👥 Team
#####  Team Name: Ctrl+Alt+Uplift
##### Team Members:
- Mahera Umangkumar
- Archana Gavade,
- Mahera Purnima

### Final Note

GuruPulse reframes teacher support from delayed supervision to real-time professional partnership.

By giving every teacher an always-available classroom assistant — even without internet — GuruPulse strengthens the very place where education equity begins: the classroom.

# INSTRUCTIONS — How to Access, Run & Test GuruPulse

## 1️⃣ Project Access
- Repository URL:

https://github.com/umang252000/gurupulse

### How to Download the Project

#### Option A: Download ZIP (No Git Required)

- Open the repository link
- Click Code → Download ZIP
- Extract the ZIP file on your system

#### Option B: Clone via Git
```bash
git clone https://github.com/<your-github-username>/gurupulse.git
```

## 2️⃣ Recommended Way to Run

This is the official and recommended method.

#### Steps:

- 1.Open the GitHub repository
- 2.Click Code → Codespaces → Create codespace on main
- 3.Wait for Codespaces to load (1–2 minutes)
- 4.Open the Terminal (already available)

```bash
Run Commands:
npm install
npm run dev
```

- 5.When prompted, open the app in browser
- (usually at http://localhost:3000)

- ✅ No local installation required
- ✅ Works on any system
- ✅ Same environment for all reviewers

## 3️⃣ Run Locally (Optional)
### Prerequisites
- Node.js v18 or above
- npm installed

### Steps:
```bash
npm install
npm run dev

Open in browser:
http://localhost:3000
```

## 4️⃣ How to Use GuruPulse (Demo Flow)
### Step-by-Step Demo

#### 1.Open the GuruPulse web app
#### 2.Select:
- Grade: Grade 3–5
- Subject: Math

#### 3.Describe the classroom challenge by:
- Typing OR
- Clicking 🎤 Speak instead of typing

##### Example Input:
- Students are confused about zero in subtraction
- Click Get Classroom Help

#### Output You Will See:
- What to do now – immediate classroom action
- Why this works – pedagogical reasoning
- Next step – follow-up strategy

## 5️⃣ Testing Offline-First Capability
#### Offline Test Steps:
- 1.Use GuruPulse once while internet is ON
- 2.Turn internet OFF (or DevTools → Network → Offline)
- 3.Refresh the page
- 4.Enter the same classroom challenge
- 5.Click Get Classroom Help

- ✅ The response still appears from local cache
- ✅ Confirms offline-first design

## 6️⃣ Voice Input Instructions
#### Supported Browsers
- Google Chrome
- Microsoft Edge

#### How to Use Voice Input:
- 1.Click 🎤 Speak instead of typing
- 2.Allow microphone access
- 3.Speak your classroom challenge clearly
- 4.The text auto-fills in the input box

## 7️⃣ Architecture & Design Notes

- Uses offline knowledge base for reliability
- No student data is collected or stored
- Responses are deterministic and explainable
- Designed for low-connectivity classrooms

## 8️⃣ Troubleshooting
### Issue -- Solution
App not loading -- Ensure npm run dev is running
Voice not working -- Use Chrome / allow microphone
No response	Check -- grade/subject selection
Offline test fails -- Run once online to cache response

## 9️⃣ Intended Users
- Government school teachers (Primary & Secondary)
- Cluster / Block Resource Persons (future extension)
- Teacher training institutions
- Education system leaders

#### Final Note

##### GuruPulse is designed to be:
- Immediately usable
- Offline-first
- Scalable
- Policy-aligned
- It demonstrates how technology can provide just-in-time professional support to teachers where it matters most — inside the classroom.
