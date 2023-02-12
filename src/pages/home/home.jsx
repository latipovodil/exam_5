import React from "react";
import { Header } from "../profilePage/components";
import { Main } from "./components/main/main";
import { PageLeft } from "./components/pageLeft/pageLeft";
export const Home = ({ data, repo }) => {
  return (
    <>
      <Header data={data} repo={repo} />
      <div
        className="container2"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <PageLeft data={data} repo={repo} />
        <Main />
      </div>
    </>
  );
};
