import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, MainHeader, MainLeft } from "./components";

export const Profile = ({ data, repo }) => {
  
  return (
    <>
      <Header data={data} repo={repo} />
      <main>
        <MainHeader data={data} repo={repo} />
        <div
          className="container"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <MainLeft data={data} repo={repo} />
          <Outlet data={data} repo={repo} />
        </div>
      </main>
      <Footer data={data} repo={repo} />
    </>
  );
};
