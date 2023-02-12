import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export const Card = ({ el }) => {
  const [state, setState] = React.useState(false);
  const [stars, setStars] = React.useState(false);
  return (
    <li key={el.id} className="main-right__repo repo__item">
      <div className="repo__item-wrapper">
        <div>
          <div className="main-right__repo-text-box repo__item-link-box">
            <span>
              {" "}
              <a
                target="_blank"
                style={{ display: "inline" }}
                className="main-right__repo-link repo__item-link"
                href={el.html_url}
              >
                {el.owner.login+ "/"+ el.name}
              </a>
              <span
                className="main-right__repo-type repo__item-type-public"
                style={{ display: "inline" }}
              >
                {el.visibility}
              </span>
            </span>
          </div>
          <div>
            <div
              style={{ marginTop: "15px" }}
              className="main-right__repo-bottom"
            >
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

              {el.stargazers_count > 0 ? (
                <p className="main-right__repo-stars">
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
                  <span style={{ marginRight: "7px" }}>
                    {el.stargazers_count}
                  </span>
                </p>
              ) : (
                ""
              )}

              <p className="main-right__repo-stars">{el.updated_at}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="repo__item-star">
            <button
              onClick={() => setState(!state)}
              className="main-right__repo-stars repo__starts-icon"
            >
              {state ? (
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
              {state ? "Starred" : "Star"}
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
          <div style={{ marginTop: "40px" }}>
            <div>
              <span ariaLabel="Past year of activity">
                <svg style={{ fill: "#3fb950" }} width="155" height="30">
                  <defs>
                    <linearGradient
                      id="gradient-595449277"
                      x1="0"
                      x2="0"
                      y1="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--color-calendar-graph-day-L1-bg)"
                      ></stop>
                      <stop
                        offset="10%"
                        stopColor="var(--color-calendar-graph-day-L2-bg)"
                      ></stop>
                      <stop
                        offset="25%"
                        stopColor="var(--color-calendar-graph-day-L3-bg)"
                      ></stop>
                      <stop
                        offset="50%"
                        stopColor="var(--color-calendar-graph-day-L4-bg)"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="sparkline-595449277"
                      x="0"
                      y="0"
                      width="155"
                      height="28"
                    >
                      <polyline
                        transform="translate(0, 28) scale(1,-1)"
                        points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,7 120,1 123,1 126,1 129,1 132,1 135,1 138,1 141,1 144,1 147,1 150,1 153,1 "
                        fill="transparent"
                        stroke="#8cc665"
                        strokeWidth="2"
                      ></polyline>
                    </mask>
                  </defs>
                  <g transform="translate(0, -11)">
                    <rect
                      x="0"
                      y="-2"
                      width="155"
                      height="30"
                      style={{
                        stroke: "none",
                        mask: "url(#sparkline-595449277)",
                      }}
                    ></rect>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
