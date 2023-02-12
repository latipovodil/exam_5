import React from "react";
import "./mainRight.scss";
import { Constributions } from "./components/constributions";
import { CircularProgress, LinearProgress } from "@mui/material";
export const MainRight = ({ data, repo }) => {
  return (
    // fill
    <section className="main-right">
      <div className="container main-right__container">
        <div className="readme-file">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              className="readme_link"
              target="_blank"
              href="https://github.com/odilbekl/odilbekl"
            >
              {data?.login ? (
                data.login
              ) : (
                <CircularProgress style={{ width: "10px", height: "10px" }} />
              )}
              /README<span>.md</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/odilbekl/odilbekl/edit/main/README.md"
            >
              
            </a>
          </div>

          <p>
            <a href="https://git.io/typing-svg">
              {data?.login ? (
               <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=25&duration=1000&pause=100&color=294B2B&background=FFFFFF00&vCenter=true&width=700&height=100&lines=I+'m+frontent+developer!!!;React%2Cnex-js%2Chtml%2Ccss%2Csass;Sog'+bo'lasla+!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" alt="Typing SVG" /></a>
              ) : (
                // <CircularProgress style={{ width: "10px", height: "10px" }} />
                <LinearProgress style={{width:"900px"}} />
              )}
            </a>
          </p>
          <p> - 🌱 I'm currently learning everything about web development </p>
          <p> - ⚡ Fun fact: I love sports and play guitar </p>
          <p>
            {" "}
            - 🥅 2023 Goals: Learn more about <b>ReactJS</b> , <b>NextJs</b> and{" "}
            <b>JavaScript</b>{" "}
          </p>
        </div>
        <div className="main-right__title-box">
          <h3 className="main-right__title">Popular repositories</h3>
          <p className="main-right__custumise">Customize your pins</p>
        </div>

        <div className="main-right__main">
          <ul className="main-right__repo-box">
            {repo?.map((el) =>
              el.stargazers_count > 0 ? (
                <li key={el.id} className="main-right__repo">
                  <div className="main-right__repo-text-box">
                    <a
                      target="_blank"
                      className="main-right__repo-link"
                      href={el.html_url}
                    >
                      {el.name}
                    </a>
                    <p className="main-right__repo-type">{el.visibility}</p>
                  </div>
                  <div className="main-right__repo-bottom">
                    {el.language ? (
                      <p
                        style={{ marginRight: "7px" }}
                        className="main-right__repo-language"
                      >
                        <span
                          style={
                            el.language === "CSS"
                              ? { backgroundColor: "#563d7c" }
                              : el.language === "JavaScript"
                              ? { backgroundColor: "#f1e05a" }
                              : {}
                          }
                        ></span>

                        {el.language}
                      </p>
                    ) : (
                      ""
                    )}

                    <p className="main-right__repo-stars">
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="overview-icon"
                      >
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                      </svg>
                      {el.stargazers_count}
                    </p>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <Constributions />
        {/* el */}
      </div>
    </section>
  );
};
