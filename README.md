# Kasa : Creation of a real estate rental web application 🏡

The goal of this project is to create a real estate rental web application in React, using Figma mockups and simulated JSON data.
The application allows the user to navigate between different pages and explore properties via a fluid and responsive interface.

This project is part of the Web Integrator training course – OpenClassrooms.

## 🚀 Key Features

- **Browse Apartments:** View a list of available apartments with key details.
- **Detailed Apartment View:** Access comprehensive information about each apartment, including images, description, equipment, and host details.
- **Dynamic Routing:** Navigate between different apartments using dynamic routes.
- **About Page:** Learn about Kasa's values and commitments.
- **Error Handling:** Display a "Not Found" page for invalid routes.
- **Responsive Design:** The application is designed to be responsive and work well on different screen sizes.
- **Collapsible Sections:** Utilizes collapsible sections for displaying detailed information in a user-friendly manner.
- **Image Slideshow:** Showcases apartment images in an interactive slideshow.
- **Rating Display:** Visually represents apartment ratings using stars.
- **Tag Display:** Displays relevant tags for each apartment.

## 🧠 Skills developed

- Initialize an application with Vite to benefit from a fast and lightweight React environment.
- Configure page navigation with React Router.
- Develop reusable and structured components with React.
- Styling with Sass (SCSS) for better organization of CSS code.
- Implement CSS animations for a pleasant and modern user experience.
- Consume data from a JSON file to dynamically display accommodations.

## 🛠️ Tech Stack

- **Frontend:**
  - React: JavaScript library for building user interfaces
  - React Router DOM: For handling client-side routing
  - SCSS: CSS preprocessor for styling
- **Build Tools:**
  - Vite: Fast build tool and development server
- **Other:**
  - JSON: Data format for storing apartment information

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

2.  Install dependencies:

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

## 🌍 Deployment

The project is deployed on Vercel:
https://projet7-oc-deshayes-projects.vercel.app/

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

## 📬 Contact

Deshayes Julie - julie.deshayes14@gmail.com

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Thanks

This is partly written by [readme.ai](https://readme-generator-phi.vercel.app/) to help developers create beautiful documentation.
