<div align="center">
  <img src="https://cdn.prod.website-files.com/64107f65f30b69371e3d6bfa/65c6179aa44b63fa4f31e7ad_Holberton-Logo-Cherry.svg" alt="Holberton School Logo" width="400"/>

  # Cinema Guru - Holberton School

  **Movie discovery and watchlist app built with React**

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

  ---

  **Author:** [@vlldnt](https://github.com/vlldnt)
  **GitHub:** [holbertonschool-cinema-guru](https://github.com/vlldnt/holbertonschool-cinema-guru)

</div>

---

## 📚 Project Overview

**Cinema Guru** is a full-stack movie discovery application developed as part of the Holberton School curriculum. It allows users to browse movies, manage a favorites list, and keep track of movies to watch later — all backed by a Dockerized Node/Express + PostgreSQL API.

---

## Features

| ✨ Feature | 📝 Description |
|-----------|---------------|
| **Authentication** | Login / register system with JWT |
| **Movie Browser** | Browse and search movies with filters |
| **Favorites** | Add movies to your personal favorites list |
| **Watch Later** | Save movies to watch later |
| **Activity Feed** | Sidebar showing recent user activity |
| **Pagination** | Load more button for seamless browsing |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, React Router, Axios, FontAwesome, Vite |
| **Backend** | Node.js, Express (via Docker) |
| **Database** | PostgreSQL (via Docker) |
| **Tooling** | Docker, Yarn |

---

## ⚙️ Installation

The backend and PostgreSQL run in Docker. The frontend runs **outside Docker** and proxies `/api` calls to the Docker bridge address `172.17.0.1:8000`.

**1. Clone the repository**
```bash
git clone https://github.com/vlldnt/holbertonschool-cinema-guru.git
cd holbertonschool-cinema-guru
```

**2. Start the backend**
```bash
docker compose up -d
```

**3. Start the frontend**
```bash
yarn
yarn dev
```

App available at **http://localhost:5173**

---

## 🎓 Learning Objectives

Throughout this project, you will master:

- ✅ **React Components** — Build reusable UI components with JSX
- ✅ **State & Props** — Manage data flow between components
- ✅ **React Hooks** — Use `useState`, `useEffect`, `useCallback` and custom hooks
- ✅ **React Router** — Handle client-side navigation and protected routes
- ✅ **REST API integration** — Fetch data with Axios, handle auth headers
- ✅ **Docker** — Set up and run a containerized backend
- ✅ **CSS Styling** — Implement a responsive design with custom CSS

---

## 📖 Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Docker Documentation](https://docs.docker.com/)

---

<div align="center">

  **Made with ❤️ at Holberton School**

  ⭐ Star this repo if you found it helpful!

</div>
