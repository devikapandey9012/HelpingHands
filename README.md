# HelpingHands

A React.js application built with Vite for fast development and optimized production builds.

## Project Structure

```
HelpingHands/
├── backend/                # Backend folder
│   ├── routes/             # Routes for backend APIs
│   │   └── contactRoutes.js
│   ├── db.js               # Database connection file
│   └── server.js           # Express server entry point
├── src/                    # Application source code
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── assets/             # Static assets (images, icons, etc.)
├── public/                 # Public static files
├── index.html              # HTML template
└── vite.config.js          # Vite configuration

```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **ESLint** - Code linting and quality checks

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



