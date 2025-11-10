# Kasa : Creation of a real estate rental web application 🏡

## 🎯 Project Objective

The goal of this project is to create a real estate rental web application in React, using Figma mockups and simulated JSON data.
The application allows the user to navigate between different pages and explore properties via a fluid and responsive interface.

This project is part of the Web Integrator training course – OpenClassrooms.

---

## 🧠 Skills Developed

- **React Fundamentals** – Creating reusable components, managing props and state, and structuring a scalable React application.  
- **Routing with React Router** – Implementing client-side navigation for multiple pages (Home, About, Apartment, and Error pages).  
- **Component Architecture** – Designing a modular component structure to ensure maintainability and readability of the codebase.  
- **Dynamic Data Rendering** – Fetching and displaying housing data from a local JSON file to simulate API responses.  
- **Sass Integration** – Writing clean, modular, and maintainable styles using Sass (SCSS syntax).  
- **CSS Animations** – Enhancing user experience with subtle animations on collapsible sections and image transitions.  
- **Error Handling** – Managing invalid routes and missing apartment data through custom error pages.  
- **Responsive Web Design** – Developing a mobile-first responsive layout to ensure an optimal experience on all screen sizes.  
- **Code Quality and Standards** – Following Kasa’s coding guidelines and best practices for clean, maintainable React projects.

---

## ⚙️ Technical Stack

- **Languages:** JavaScript (ES6+), HTML5, Sass (SCSS syntax)  
- **Framework:** React (with Vite)  
- **Routing:** React Router  
- **Data Source:** Local JSON file (mock data)  
- **Tools:** Visual Studio Code, Node.js, npm, Git, GitHub  
- **Design Reference:** Figma mockups and interactive prototypes  
- **Version Control:** Git / GitHub  
 
---

## 🚀 Features Implemented

### 🏠 Home Page
- Displays a list of real estate listings with cover images and titles.  
- Data dynamically fetched from a local JSON file.  
- Clicking on a listing redirects to its dedicated apartment details page.

### 🏡 Apartment Details Page
- Displays full information for each apartment, including title, location, description, rating, and host profile.  
- Integration of **dynamic routing** using the apartment’s ID.  
- Error page displayed when accessing a non-existent apartment.  

### 🖼️ Image Gallery
- Interactive slideshow for apartment images with navigation arrows.  
- Infinite loop functionality:  
  - Clicking “next” on the last image displays the first one.  
  - Clicking “previous” on the first image displays the last one.  
- Navigation arrows and image counter hidden if there’s only one image.  
- Gallery maintains consistent height based on the Figma mockups.  

### 🔽 Collapsible Sections (Collapse)
- Used to display additional details such as apartment description and equipment list.  
- Closed by default and toggleable by clicking on the section header.  
- Smooth opening and closing animations for better UX.  

### 🧭 Navigation & Routing
- **React Router** implemented for page navigation (Home, About, Apartment, 404).  
- 404 page displayed for invalid routes or missing data.  
- Seamless transitions between pages without reloading.  

### 💫 Responsive Design & UI
- Fully responsive layout following Figma mobile-first mockups.  
- Consistent and optimized visual experience across all devices.  
- Clean and minimalist design, faithful to Kasa’s branding.  

---

## 📦 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Julie-Des/Projet7-oc
    ```
    
2.  Navigate to the project directory:

    ```bash
    cd Projet7-oc
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

---

## 🌍 Deployment

The project is deployed on Vercel:
https://projet7-oc-deshayes-projects.vercel.app/

---

## 💻 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── CardsContainer.jsx
│   │   ├── Collapse.jsx
│   │   ├── Equipments.jsx
│   │   ├── Host.jsx
│   │   ├── Rating.jsx
│   │   ├── Slideshow.jsx
│   │   ├── Tags.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Apartment.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   ├── router/
│   │   ├── AppRouter.jsx
│   ├── datas/
│   │   ├── apartmentsDatas.json
│   ├── assets/
│   │   ├── arrow-icon.png
│   │   ├── arrowLeft.png
│   │   ├── arrowRight.png
│   │   ├── star-grey.png
│   │   ├── star-red.png
│   ├── styles/
│   │   ├── main.scss
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.js

```

---

## 📬 Contact

Deshayes Julie - julie.deshayes14@gmail.com

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💖 Thanks

This is partly written by [readme.ai](https://readme-generator-phi.vercel.app/) to help developers create beautiful documentation.
