import React from "react";
import { Redirect } from "next";

const HYDiscover = React.lazy(() => import("../../pages/discover/recommend"));
const HYRanking = React.lazy(() => import("@/../pages/discover/toplist"));
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
        path: "/discover/toplist",
        component: HYRanking,
      },
    ],
  })
];
