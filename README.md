
---

##  Features

- ✅ Firebase Email/Password Authentication
- 🔐 Protected Routes via `react-router-dom`
- 🎉 Auto-login persistence
- 🔘 Logout + user email display

---

##  Technologies

- React 18+
- Firebase Auth (modular SDK v9)
- react-router-dom v6
- react-firebase-hooks v5

---

##  Getting Started

### ✅ 1. Clone the Repo

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
````

### ✅ 2. Install Dependencies

```bash
npm install
```

### ✅ 3. Add Firebase Config

Create a file: `src/firebase.js` with the following structure:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "XXXXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

> 🔐 You can find this config in your [Firebase console](https://console.firebase.google.com) under Project Settings → General → Web App

---

## ▶️ 4. Run the App

```bash
npm start
```

Visit: [http://localhost:3000/register](http://localhost:3000/register) or `/login`

---

## ✅ Available Routes

| Path         | Description                     |
| ------------ | ------------------------------- |
| `/register`  | User registration               |
| `/login`     | User login                      |
| `/dashboard` | Protected route, requires login |

---


