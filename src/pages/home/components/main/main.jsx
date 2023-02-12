import React from "react";
import { Link } from "react-router-dom";
import { home2 } from "../../../profilePage/imgs";
import { Card } from "./components/card";

import "./main.scss";
export const Main = () => {
  const [checkedSection, setCheckedSection] = React.useState("overview");

  return (
    <div className="follow__box">
      <div className="follow">
        <ul className="follow__header mainHeader__nav2">
          <li
            onClick={() => setCheckedSection("overview")}
            style={
              checkedSection === "overview"
                ? { borderBottom: "3px solid #B56150" }
                : { borderBottom: "3px solid transparent" }
            }
          >
            <Link
              to="/"
              style={
                checkedSection === "overview"
                  ? {
                      backgroundColor: "transparent",
                    }
                  : {}
              }
            >
              <p>Following</p>
            </Link>
          </li>
          <li
            onClick={() => setCheckedSection("repository")}
            style={
              checkedSection === "repository"
                ? {
                    borderBottom: "3px solid #B56150",
                  }
                : { borderBottom: "3px solid transparent" }
            }
          >
            <Link
              to="/"
              style={
                checkedSection === "repository"
                  ? {
                      backgroundColor: "transparent",
                    }
                  : {}
              }
            >
              {" "}
              <p>For you</p>
              <span className="beta">Beta</span>
            </Link>
          </li>
        </ul>
        <div style={{ display: "flex",alignItems:"flex-start" }}>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <img
            src={home2}
            style={{ width: "300px",marginTop:"50px",marginLeft:"10px"  }}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
