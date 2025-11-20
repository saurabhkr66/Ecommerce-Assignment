ShopHub - React E-commerce App
A modern e-commerce application built with React and Fake Store API featuring product browsing, cart management, and checkout functionality.

🚀 Quick Start
bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
🛠️ Tech Stack
React 18 - UI framework

Vite - Build tool

React Router - Routing

Zustand - State management

React Query - Data fetching & caching

Tailwind CSS - Styling

Axios - HTTP client

Fake Store API - Backend data

✨ Features
Product listing with search and category filters

Detailed product pages with ratings

Shopping cart with localStorage persistence

Checkout with form validation

Responsive design for all devices

Smart caching to reduce API calls

📁 Structure
text
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── store/            # Zustand state management
├── services/         # API integration
├── hooks/            # Custom React hooks
└── App.jsx           # Main app with routing
🌐 Routes
/ - Product listing

/product/:id - Product details

/cart - Shopping cart

/checkout - Checkout page

🎯 Key Functionality
Cart Management (Zustand + localStorage):

Add/remove items

Update quantities

Auto-save cart state

Calculate totals

Data Fetching (React Query):

Products cached for 5 minutes

Categories cached for 10 minutes

Automatic background refetching

📦 Deployment
Deploy to Vercel 