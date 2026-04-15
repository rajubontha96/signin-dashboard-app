# 📊 Dashboard App (Next.js + Google Auth)

A modern, responsive dashboard application built with **Next.js**, featuring **Google Authentication**, interactive **charts**, and a clean UI inspired by a high-fidelity Figma design.

---

## 🚀 Live Demo

👉 (Add your Vercel link here)

---

## 📌 Features

* 🔐 **Authentication**

  * Google Sign-In using NextAuth.js
  * Protected dashboard routes

* 📊 **Dashboard UI**

  * Sidebar navigation
  * Top statistic cards
  * Activity line chart
  * Product pie chart
  * Today's schedule section

* 📡 **API Integration**

  * Data fetched using Axios
  * Supports external/public APIs

* 🎨 **Design**

  * Pixel-perfect layout based on Figma
  * Built with Tailwind CSS
  * Clean and modern UI

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), React
* **Authentication:** NextAuth.js (Google Provider)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **API Calls:** Axios

---

## 📁 Project Structure

```
dashboard-app/
│
├── app/
│   ├── api/auth/[...nextauth]/route.js
│   ├── components/
│   ├── dashboard/page.js
│   ├── login/page.js
│   ├── layout.js
│   └── page.js
│
├── lib/
│   ├── auth.js
│   └── api.js
│
├── styles/
│   └── globals.css
│
├── package.json
├── tailwind.config.js
└── .env.local
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/your-username/dashboard-app.git
cd dashboard-app
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Setup Environment Variables

Create `.env.local` file:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

---

### 4. Google OAuth Setup

1. Go to: https://console.cloud.google.com
2. Create OAuth credentials
3. Add redirect URL:

```
http://localhost:3000/api/auth/callback/google
```

---

### 5. Run the Project

```
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

* User clicks **Sign in with Google**
* NextAuth handles OAuth flow
* Session is stored securely
* Dashboard is protected using server-side session check

---

## 📊 Charts

* **Activity Chart:** Line chart showing user vs guest activity
* **Product Chart:** Pie chart displaying product distribution
* Built using Recharts with dummy data

---

## 🎯 Key Highlights

* Clean and scalable folder structure
* Server-side authentication protection
* Reusable component-based architecture
* Optimized for performance and readability

---

## ⚠️ Challenges Faced

* Integrating NextAuth with App Router
* Protecting routes using `getServerSession`
* Matching Figma design pixel-perfectly
* Managing responsive layout with Tailwind

---

## 🔮 Future Improvements

* Add dark mode 🌙
* Fully responsive mobile layout 📱
* Dynamic data from backend APIs
* Add user profile & logout functionality

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out!

---

## ⭐ Acknowledgements

* NextAuth.js Documentation
* Recharts Library
* Public APIs Repository
* Figma Design Reference

---

## 📄 License

This project is for educational and assignment purposes.
