import React from "react";
import { sam } from "../../../../profilePage/imgs";
import { Checkbox, FormControlLabel } from "@mui/material";
export const Card = () => {
  const [bool, setBool] = React.useState(0);
  const [stars, setStars] = React.useState(false);
  return (
    <div style={{marginTop:"20px"}}>
      <a target="_blank" className="main__repo-link" href="/">
        <img
          src={sam}
          style={{
            width: "34px",
            height: "34px",
            marginLeft: "10px",
            marginBottom: "10px",
            borderRadius: "50%",
          }}
          alt="img"
        />{" "}
        Samandareshmamatov created a repository Samandareshmamatov/github · 1h
      </a>

      <div style={{ width: "650px", height: "90px" }} className="main__repo">
        <div className="main__repo-text-box">
          <a target="_blank" className="main__repo-link" href="/">
            <img
              src={sam}
              style={{ width: "24px", height: "24px", borderRadius: "50%" }}
              alt="img"
            />{" "}
            SamandarEshmamatov/github
          </a>
          <div style={{ marginRight: "0" }} className="repo__item-star">
            <button
              onClick={() => setBool(!bool)}
              className="main-right__repo-stars repo__starts-icon"
            >
              {bool ? (
                "⭐ "
              ) : (
                <svg
                  ariaLabel="stars"
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
              )}

              {bool ? "Starred" : "Star"}
            </button>
            <button
              className="repo__type repo__stars"
              onClick={() => setStars(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "-3px" }}
                className="overviwe-icon"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            {stars ? (
              <div>
                <div
                  onClick={() => setStars(false)}
                  className="header__createNew-close"
                ></div>
                <ul
                  style={{ width: "300px", padding: "0" }}
                  className="header__createNew"
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #f0f6fc1a",
                    }}
                  >
                    <h4 className="repo__select-type">Lists</h4>
                    <svg
                      style={{ marginLeft: "200px" }}
                      onClick={() => setStars(false)}
                      ariaLabel="Close menu"
                      ariaHidden="false"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="overview-icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </li>
                  <p style={{ padding: "20px", width: "auto" }}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="✨ Inspiration"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="🚀 My stack"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="🔮 Future ideas"
                    />
                  </p>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderTop: "1px solid #f0f6fc1a",
                    }}
                  >
                    <h4 className="repo__select-type">+ Create lists</h4>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="main__repo-bottom">
          <p className="main__repo-stars">
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
            5
          </p>{" "}
          <p style={{ marginRight: "7px" }} className="main__repo-language">
            {"Updated 12 Feb"}
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
