⚡ SkyMart — Modern E-Commerce Web Application
SkyMart is a sleek, responsive, and feature-rich e-commerce web application built using React, Vite, Tailwind CSS, and Lucide React Icons. It features complete authentication routing, product searching, interactive filtering, dynamic shopping cart/wishlist state, and an error boundary wrapper for resilience.

✨ Features
🔐 Authentication & Registration Flow

Initial direct-to-login access flow.

Separate Register Page allowing users to sign up and smoothly rerender back to the Sign-In screen.

🛍️ Interactive Shopping Experience

Home Dashboard: Displays user metrics, category shortcuts, and top-rated products.

Shop Page: Complete catalog with dynamic search, category filtering, price sliders, and sorting options (low-to-high, high-to-low, rating).

Product Detail Modal: Quick view modal with detailed specifications and add-to-cart functionality.

🛒 Cart & Wishlist Management

Slide-over Cart Drawer with real-time total calculations.

Promo code support (e.g., try entering SKY20 for a 20% discount).

Wishlist toggle on every product card.

📦 Order Tracking & Checkout

Simulated checkout workflow with instant order confirmation.

Dedicated Orders Page to view purchase history and receipt downloads.

🛠️ Tech Stack
Frontend Library: React

Build Tool: Vite

Styling: Tailwind CSS

Iconography: Lucide React

📂 Directory Structure
Plaintext
skymart-app/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── CartDrawer.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   └── ProductCard.jsx
    ├── data/
    │   └── products.js
    └── pages/
        ├── AboutPage.jsx
        ├── AuthPage.jsx
        ├── HomePage.jsx
        ├── RegisterPage.jsx
        └── ShopPage.jsx
🚀 Quick Start & Local Setup
Prerequisites
Ensure you have Node.js installed (v16+ recommended).

1. Clone the repository
Bash
git clone https://github.com/your-username/skymart-app.git
cd skymart-app
2. Install dependencies
Bash
npm install
npm install lucide-react
npm install tailwindcss @tailwindcss/vite                                                        
                                   
4. Start the development server
Bash
npm run dev
Open your browser and navigate to http://localhost:5173 to run the app.

Promo Code: Open the slide-over cart and enter promo code SKY20 to get 20% off.
