import { createBrowserRouter } from "react-router-dom";
import { NewsDetailPage } from "../components/pages/SingleNews";
import FrontEndLayout from "../components/Layout/FrontEndLayout";
import Home from "../components/pages/Home";
import News from "../components/pages/News";
import ProjectDetails from "../components/pages/ProjectDetails";
import { EventDetailPage } from "../components/pages/EventDetails";
import SingleTeam from "../components/pages/SingleTeam";
import Projects from "../components/pages/Projects";
import { Galleries } from "../components/Galleries";

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
      },
      {
        path: '/team/:id',
        element: <SingleTeam />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/galleries',
        element: <Galleries />
      }
    ]
  }
])

export default routes;