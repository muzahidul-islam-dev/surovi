import { createBrowserRouter } from "react-router-dom";
import { NewsDetailPage } from "../components/pages/SingleNews";
import FrontEndLayout from "../components/Layout/FrontEndLayout";
import Home from "../components/pages/Home";
import News from "../components/pages/News";
import ProjectDetails from "../components/pages/ProjectDetails";
import { EventDetailPage } from "../components/pages/EventDetails";

const routes = createBrowserRouter([

  {
    path: '/',
    element: <FrontEndLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/news/:id',
        element: <NewsDetailPage />
      },
      {
        path: '/news',
        element: <News />
      },
      {
        path: '/project/:id',
        element: <ProjectDetails />
      },
      {
        path: '/event/:id',
        element: <EventDetailPage />
      }
    ]
  }
])

export default routes;