# Foody - Premium Food Delivery & E-Commerce Platform

## Project Overview

Developed **Foody**, a premium full-stack food delivery and e-commerce platform, enabling users to browse, customize, and order food items with real-time order tracking and seamless payment integration.

### Key Features

- **Interactive Food Catalog**: Dynamic product listing with detailed descriptions, ratings, and images
- **Personalized User Experience**: User authentication and profile management for saved preferences
- **Real-time Order Management**: Live order status tracking with push notifications
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices with smooth animations
- **Secure Checkout**: Integrated payment gateway with multiple payment options

## Technical Highlights

- **Frontend Architecture**: Built a responsive, component-driven React application using Vite for lightning-fast development and optimized production builds
- **State Management**: Leveraged Redux Toolkit for centralized state management, ensuring consistent data flow across the application
- **UI/UX Enhancement**: Implemented smooth animations and transitions using Framer Motion for enhanced user engagement
- **Styling**: Utilized Tailwind CSS for rapid, utility-first UI development with consistent design patterns
- **Authentication**: Integrated Clerk for secure user authentication and session management
- **Performance Optimization**: Configured Vite with Hot Module Replacement (HMR) for instant feedback during development

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Animation**: Framer Motion
- **Authentication**: Clerk
- **HTTP Client**: Axios
- **Language**: JavaScript/JSX
- **Package Manager**: npm

## Project Structure

```
Frontend/
├── src/
│   ├── Components/      # Reusable UI components
│   ├── assets/          # Images and static assets
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── public/              # Static public assets
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
