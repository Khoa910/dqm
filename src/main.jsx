import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import HomeLogic from './logic/HomeLogic.jsx';
// import AboutPage from './pages/aboutUs/AboutPage.jsx';
// import VisionPage from './pages/aboutUs/VisionPage.jsx';
// import LeadershipPage from './pages/aboutUs/LeadershipPage.jsx';
// import HistoryPage from './pages/aboutUs/HistoryPage.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLogic />,
      },
      // {
      //   path: "about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "vision",
      //   element: <VisionPage />,
      // },
      // {
      //   path: "leadership",
      //   element: <LeadershipPage />,
      // },
      // {
      //   path: "history",
      //   element: <HistoryPage />,
      // }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     {/* <App/> */}
  </StrictMode>,
)
