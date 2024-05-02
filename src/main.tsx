import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import bg from "./public/assets/portfolio-bg.jpg"
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";

const myStyle = {
  backgroundImage: `url(${bg})`,
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  overflow: "scroll"
};

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
  }, {
    path: "/portfolio/project/",
    element: <ProjectPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={myStyle}>
      <Router router={router} />
    </div>
  </React.StrictMode>,
)
