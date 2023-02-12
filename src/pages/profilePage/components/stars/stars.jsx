import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./components/card/card";
import "./stars.scss";
export const Stars = () => {
  const [sort, setSort] = React.useState(false);
  const [sort2, setSort2] = React.useState("Last updated");
  const [stars2, setStars2] = React.useState([]);
  const [createNew, setCreateNew] = React.useState(false);
  const [language, setLanguage] = React.useState(false);
  const [type, setType] = React.useState("all");
  const [sort3, setSort3] = React.useState(false);
  const [sort4, setSort4] = React.useState("Last updated");
  const [lan, setLan] = React.useState("all");
  const [stars, setStars] = React.useState(false);
  React.useEffect(() => {
    fetch("https://api.github.com/users/odilbekl/starred")
      .then((res) => res.json())
      .then((data) => setStars2(data));
  }, []);
// beta
  return (
    <div className="stars">
      <div className="stars__header">
        <h3 className="stars__header-title">
          Lists <span>(3)</span>
        </h3>
        <div>
          <button className="repo__type" onClick={() => setSort(true)}>
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ marginLeft: "-3px", fill: "#fff" }}
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          <Button
            style={{ marginLeft: "10px", padding: "4px 16px" }}
            variant="contained"
            color="success"
          >
            Create list
          </Button>
        </div>
      </div>
      <div className="stars__list">
        <Link to="/stars/inspiraction" className="stars__list-el">
          <h4>✨ Inspiration</h4>
          <p>1 reposiztory</p>
        </Link>
        <Link to="/stars/stack" className="stars__list-el">
          <h4>🚀 My stack</h4>
          <p>1 repository</p>
        </Link>
        <Link to="/stars/future" className="stars__list-el">
          <h4>🔮 Future ideas</h4>
          <p>1 reposiztory</p>
        </Link>
      </div>
      <div className="stars__list-bottom">
        <span>Beta</span>
        <p>Lists are currently in beta.</p>
        <Link
          target="_blank"
          to="https://github.com/community/community/discussions/categories/lists"
        >
          Share feedback and report bugs.
        </Link>
      </div>
      <div className="stars__main-header">
        <h2 className="stars__header-title">Stars</h2>
        <div
          style={{ position: "relative", padding: "0" }}
          className="repo__container stars__main-header-container"
        >
          <div className="repo__header stars__main-header-el">
            <input
              placeholder="Search stars"
              ariaLabel="Search stars"
              className="repo__search stars__search"
              type="text"
            />

            <div
              style={{ padding: "0" }}
              className="header__right-el repo__sortes"
            >
              <button className="repo__type" onClick={() => setCreateNew(true)}>
                Type
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "-3px", fill: "#fff" }}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              <button
                style={{ width: "auto", padding: "5px" }}
                className="repo__type"
                onClick={() => setLanguage(true)}
              >
                Language {lan}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "-3px", fill: "#fff" }}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              <button className="repo__type" onClick={() => setSort3(true)}>
                Sort by: {sort4}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "-3px", fill: "#fff" }}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stars__main">
        <ul className="repo__main">
          {stars2?.length ? (
            stars2.map((el) => <Card el={el} />)
          ) : (
            <CircularProgress
              style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block",
              }}
            />
          )}
        </ul>
      </div>
      {sort ? (
        <div className="repo__item-rl">
          <div
            onClick={() => setSort(false)}
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
              }}
            >
              <h4 className="repo__select-type">Sort by</h4>
              <svg
                style={{ marginLeft: "150px" }}
                onClick={() => setSort(false)}
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
            <li
              style={{
                borderTop: "1px solid #21262d",
                borderBottom: "1px solid #21262d",
              }}
              onClick={() => {
                setSort2("Name ascending (A-Z)");
              }}
              className="header__createNew-items"
            >
              <svg
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                style={
                  sort2 === "Name ascending (A-Z)"
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : {
                        marginRight: "10px",
                        marginLeft: "10px",
                        opacity: "0",
                        zIndex: "-1",
                      }
                }
                className="overview-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
              Name ascending (A-Z)
            </li>
            <li
              style={{
                borderTop: "1px solid #21262d",
                borderBottom: "1px solid #21262d",
              }}
              onClick={() => {
                setSort2("Name descending (Z-A)");
              }}
              className="header__createNew-items"
            >
              <svg
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                style={
                  sort2 === "Name descending (Z-A)"
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : {
                        marginRight: "10px",
                        marginLeft: "10px",
                        opacity: "0",
                        zIndex: "-1",
                      }
                }
                className="overview-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
              Name descending (Z-A)
            </li>
            <li
              style={{
                borderTop: "1px solid #21262d",
                borderBottom: "1px solid #21262d",
              }}
              onClick={() => {
                setSort2("Newest");
              }}
              className="header__createNew-items"
            >
              <svg
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                style={
                  sort2 === "Newest"
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : {
                        marginRight: "10px",
                        marginLeft: "10px",
                        opacity: "0",
                        zIndex: "-1",
                      }
                }
                className="overview-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
              Newest
            </li>
            <li
              style={{
                borderTop: "1px solid #21262d",
                borderBottom: "1px solid #21262d",
              }}
              onClick={() => {
                setSort2("Oldest");
              }}
              className="header__createNew-items"
            >
              <svg
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                style={
                  sort2 === "Oldest"
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : {
                        marginRight: "10px",
                        marginLeft: "10px",
                        opacity: "0",
                        zIndex: "-1",
                      }
                }
                className="overview-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
              Oldest
            </li>
            <li
              style={{
                borderTop: "1px solid #21262d",
                borderBottom: "1px solid #21262d",
              }}
              onClick={() => {
                setSort2("Last updated");
              }}
              className="header__createNew-items"
            >
              <svg
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                style={
                  sort2 === "Last updated"
                    ? { marginRight: "10px", marginLeft: "10px" }
                    : {
                        marginRight: "10px",
                        marginLeft: "10px",
                        opacity: "0",
                        zIndex: "-1",
                      }
                }
                className="overview-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
              Last updated
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}{" "}
      <div>
        {language ? (
          <div className="repo__item-rl">
            <div
              onClick={() => setLanguage(false)}
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
                }}
              >
                <h4 className="repo__select-type">Select language</h4>
                <svg
                  style={{ marginLeft: "130px" }}
                  onClick={() => setLanguage(false)}
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
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("all");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "all"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                All
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("HTML");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "HTML"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                HTML
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("JavaScript");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "JavaScript"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                JavaScript
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("CSS");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "CSS"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                CSS
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("SCSS");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "SCSS"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                SCSS
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setLan("TypeScript");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    lan === "TypeScript"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                TypeScript
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}{" "}
        {sort3 ? (
          <div className="repo__item-rl">
            <div
              onClick={() => setSort3(false)}
              className="header__createNew-close"
            ></div>
            <ul
              style={{ width: "300px", padding: "0" }}
              className="header__createNew"
            >
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setSort4("Last updated");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    sort4 === "Last updated"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Recently started
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setSort4("Name");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    sort4 === "Name"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Recently active
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setSort4("Stars");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    sort4 === "Stars"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Most stars
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}{" "}
        {createNew ? (
          <div className="repo__item-rl">
            <div
              onClick={() => setCreateNew(false)}
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
                }}
              >
                <h4 className="repo__select-type">Select type</h4>
                <svg
                  style={{ marginLeft: "180px" }}
                  onClick={() => setCreateNew(false)}
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
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("all");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "all"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                All
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("public");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "public"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Public
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("private");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "private"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Private
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("sources");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "sources"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Sources
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("forks");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "forks"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Forks
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("archived");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "archived"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Archived
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType("mirrors");
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "mirrors"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Mirrors
              </li>
              <li
                style={{
                  borderTop: "1px solid #21262d",
                  borderBottom: "1px solid #21262d",
                }}
                onClick={() => {
                  setType(templates);
                }}
                className="header__createNew-items"
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  style={
                    type === "templates"
                      ? { marginRight: "10px", marginLeft: "10px" }
                      : {
                          marginRight: "10px",
                          marginLeft: "10px",
                          opacity: "0",
                          zIndex: "-1",
                        }
                  }
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                Templates
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
