🍽️ Tasty Kitchens

A modern and responsive food ordering web application built using React and Vite.

Tasty Kitchens allows users to browse restaurants, explore menus, add food items to a cart, and enjoy a smooth online food ordering experience through a clean and user-friendly interface.

📋 Table of Contents
Project Overview
Features
Tech Stack
Installation
Usage
Project Structure
Available Scripts
Test Credentials
Features in Detail
License
Contributing

📖 Project Overview

Tasty Kitchens is a frontend food ordering web application designed to provide users with an easy and interactive way to explore restaurants and order food online.

The application focuses on:

Responsive design
Secure authentication
Smooth navigation
Cart management
Better user experience

Users can:

Login securely
Browse restaurants
Explore food menus
Add food items to cart
Manage cart items
View order summary

The project is fully responsive and works smoothly on:

Desktop devices
Tablets
Mobile phones
✨ Features
🔐 User Authentication
Secure login system
Cookie-based session management
Protected routes for authenticated users
Logout functionality

🍴 Restaurant Browsing
Explore a variety of restaurants
Search restaurants easily
Filter restaurants based on preferences
View restaurant ratings and details

📋 Menu Exploration
View detailed restaurant menus
Display food items with images and prices
Easy-to-understand menu layout

🛒 Shopping Cart
Add items to cart
Remove items from cart
Increase or decrease item quantities
View total order summary
Empty cart functionality

📱 Responsive Design
Fully responsive user interface
Optimized for desktop, tablet, and mobile devices
Smooth navigation across all screen sizes

⚡ Additional Features
Custom 404 page
Error handling pages
Loading spinners
Image carousel using React Slick

🛠️ Tech Stack
Technology	Purpose
React 18.3.1	Frontend library
Vite 5.4.0	Build tool
React Router DOM 6.28.0	Client-side routing
CSS3	Styling
React Icons	Icons and UI elements
React Loader Spinner	Loading animations
React Slick	Carousel functionality
js-cookie	Cookie management
Vitest	Testing framework
React Testing Library	Component testing
Node.js & npm	Development environment

📦 Installation

Follow the steps below to run the project locally.

1️⃣ Navigate to the Project Directory

If the project already exists on your system:

cd TastyKitchens

If using GitHub:

git clone <repository-url>
cd TastyKitchens
2️⃣ Install Dependencies

Install all required packages:

npm install

This command installs:

React dependencies
Routing libraries
UI packages
Testing tools
3️⃣ Start the Development Server

Run the following command:

npm run dev

The application will run on:

http://localhost:3001

If the port is already in use, Vite may automatically choose another available port.

🚀 Usage
Step 1 — Open the Application

Open the development server URL in your browser.

Example:

http://localhost:3001
Step 2 — Login

Use the following test credentials:

Field	Value
Username	rahul
Password	rahul@2021
Step 3 — Browse Restaurants

After successful login:

Explore restaurants
View restaurant ratings
Search restaurants
Step 4 — Explore Menus

Click on a restaurant to:

View food items
Check prices
Explore menu details
Step 5 — Add Food Items to Cart

Users can:

Add items
Update quantities
Remove items
Step 6 — Manage Cart

The cart page allows users to:

Review selected items
View total amount
Continue browsing

📁 Project Structure
src/
├── components/
│
│   ├── Header/
│   │   └── Navigation header component
│
│   ├── Home/
│   │   └── Homepage/dashboard
│
│   ├── LoginForm/
│   │   └── User login form
│
│   ├── AllRestaurants/
│   │   └── Restaurants listing page
│
│   ├── RestaurantDetails/
│   │   └── Restaurant details page
│
│   ├── RestaurantsHeader/
│   │   └── Restaurant page header
│
│   ├── FoodItems/
│   │   └── Food items display component
│
│   ├── Cart/
│   │   └── Shopping cart functionality
│
│   ├── CartEmpty/
│   │   └── Empty cart view
│
│   ├── ProtectedRoute/
│   │   └── Route protection wrapper
│
│   ├── NotFound/
│   │   └── 404 page
│
│   ├── SomethingWentWrong/
│   │   └── Error fallback page
│
│   └── Footer/
│       └── Footer component
│
├── App.jsx
│   └── Main application component
│
├── App.css
│   └── Global styling file
│
├── main.jsx
│   └── Application entry point
│
└── setupTests.js
    └── Test configuration

    
🔧 Available Scripts
Command	Description
npm run dev	Starts development server
npm run build	Creates production build
npm run preview	Previews production build
npm test	Runs test cases

🔐 Test Credentials
Field	Value
Username	rahul
Password	rahul@2021

🎨 Features in Detail
🔑 Authentication System

The authentication system provides secure access to the application.

Functionalities:
Login validation
Session management using cookies
Protected routes
Logout support
Purpose:

Ensures only authenticated users can access protected pages.

🍽️ Restaurant Management

Users can:

Browse restaurants
Search restaurants
Filter restaurants
View restaurant details
Explore menus

🛒 Food Ordering System

Cart functionality allows users to:

Add food items
Remove food items
Update quantities
View total cost
Manage cart contents easily

⚡ User Experience Enhancements
Loading States
Displays loading spinners while fetching data
Error Handling
Custom error pages
Graceful fallback UI
Navigation
Smooth page transitions using React Router
Responsive Design
Mobile-friendly layouts
Optimized UI for all devices
Icons & Visuals
Icon-based interface using React Icons
Carousel slider using React Slick

📝 License

This project was developed for learning and educational purposes.

🤝 Contributing

Contributions are welcome.

Steps to contribute:

Fork the repository
Create a new branch
Make your changes
Commit the updates
Submit a pull request
📌 Conclusion

Tasty Kitchens demonstrates modern frontend web development concepts using React and Vite.

The project showcases:

Authentication
Routing
Responsive design
Component-based architecture
Cart management
Modern UI/UX practices

It provides a smooth and interactive online food ordering experience.

🍕 Happy Ordering! 🍔🍜
