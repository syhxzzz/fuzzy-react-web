import React from "react";
import { Redirect } from "next";

const HYDiscover = React.lazy(() => import("../../pages/discover/recommend"));
const HYRanking = React.lazy(() =>
  import("@/../pages/discover/c-pages/ranking")
);
export default AA[
  ({
    path: "/",
    exact: true,
    render: () => <Redirect to={"/discover"} />,
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect />,
      },
      {
        path: "/discover/recommend",
        component: HYDiscover,
      },
      {
        path: "/discover/ranking",
        component: HYRanking,
      },
    ],
  })
];
