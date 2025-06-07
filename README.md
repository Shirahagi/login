
---

## Workflow

```text
[Register Page] --> [createUserWithEmailAndPassword()]
                          ↓
                    Firebase create new user
                          ↓
                Login successful → Jump to Dashboard
```

```text
[Login Page] --> [signInWithEmailAndPassword()]
                       ↓
                 Firebase Verification Account
                       ↓
           If successful: Jump to Dashboard
           If failed: an error message will pop up
```

---

##  Login protection mechanism

* All protected pages (here `/dashboard` is used) are wrapped by `<ProtectedRoute>`.
* `ProtectedRoute` will use `useAuthState(auth)` provided by Firebase to determine whether the user is logged in:

  * ✅ Logged in: Allow access and rendering of content
  * ❌ Not logged in: automatically jump to `/login`

---

##  Logout process

1. The user clicks the `Logout` button on the Dashboard page
2. Call the `signOut(auth)` method provided by Firebase
3. Automatically jump back to `/login` after logging out
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

###  1. Clone the Repo

```bash
git clone https://github.com/Shirahagi/login.git
cd login
````

###  2. Install Dependencies

```bash
npm install
```

###  3. Add Firebase Config

Create a file: `src/firebase.js` with the following structure:
（There is already a firebase.js file in the file, which uses my account. I don't know if this can be run on other computers）

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

## ▶ 4. Run the App

```bash
npm start
```

Visit: [http://localhost:3000/register](http://localhost:3000/register) or `/login`

---

##  Available Routes

| Path         | Description                     |
| ------------ | ------------------------------- |
| `/register`  | User registration               |
| `/login`     | User login                      |
| `/dashboard` | Protected route, requires login |

---


