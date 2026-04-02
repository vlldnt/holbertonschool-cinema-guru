# Cinema Guru

A movie discovery and watchlist app.

## Learning Objectives

- Manage state and props in a React component
- Use React hooks to achieve certain behavior
- Implement a design with JSX and CSS (React)
- Implement a frontend app with React
- Learn how to set up Docker

## Tech Stack

**Frontend:** React 19, React Router, Axios, FontAwesome, Vite  
**Backend:** Docker (Node/Express + PostgreSQL)

## Installation

The backend and PostgreSQL run in Docker. The frontend must be run **outside Docker** — it proxies `/api` calls to the Docker bridge address `172.17.0.1:8000`.

**1. Start the backend**
```bash
docker compose up -d
```

**2. Start the frontend**
```bash
yarn
yarn dev
```

App available at **http://localhost:5173**
