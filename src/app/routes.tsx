import { createBrowserRouter } from "react-router";
import { Portfolio } from "./Portfolio";
import { ProjectDetailPage } from "./ProjectDetailPage";
import { DungeonDiverDemo } from "./demos/DungeonDiverDemo";
import { LazerBallsDemo } from "./demos/LazerBallsDemo";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/project/:projectId",
      element: <ProjectDetailPage />,
    },
    {
      path: "/demo/dungeon-diver",
      element: <DungeonDiverDemo />,
    },
    {
      path: "/demo/lazer-balls",
      element: <LazerBallsDemo />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);