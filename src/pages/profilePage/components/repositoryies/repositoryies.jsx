import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { Card } from "./components/card";
import "./repositoryies.scss";
export const Repositoryies = ({ data, repo }) => {
  const [createNew, setCreateNew] = React.useState(false);
  const [language, setLanguage] = React.useState(false);
  const [type, setType] = React.useState("all");
  const [sort, setSort] = React.useState(false);
  const [sort2, setSort2] = React.useState("Last updated");
  const [lan, setLan] = React.useState("all");
  const newRepo = [];
  if (repo.length > 0) {
    for (let i = 0; i < 10; i++) {
      newRepo.push(repo[i]);
    }
  }

  return (
    <section className="repo">
      <div style={{ position: "relative" }} className="repo__container">
        <div className="repo__header">



          <input
            placeholder="Find a repository..."
            ariaLabel="Find a repository..."
            className="repo__search"
            type="text"
          />

          <div  className="header__right-el repo__sortes">
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
            <button className="repo__type" onClick={() => setLanguage(true)}>
              Language
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
              <svg
                style={{ fill: "#fff" }}
                ariaHidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              New
            </Button>
          </div>
        </div>
        <ul className="repo__main">
          {repo?.length ? (
            repo?.map((el) => (
             <Card el={el} />
            ))
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

        <Button style={{ backgroundColor: "" }} variant="outlined" disabled>
          Previos
        </Button>
        <div
         
         
        >
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
                  <h4 className="repo__select-type">Select order</h4>
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
                <li
                  style={{
                    borderTop: "1px solid #21262d",
                    borderBottom: "1px solid #21262d",
                  }}
                  onClick={() => {
                    setSort2("Name");
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
                      sort2 === "Name"
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
                  Name
                </li>
                <li
                  style={{
                    borderTop: "1px solid #21262d",
                    borderBottom: "1px solid #21262d",
                  }}
                  onClick={() => {
                    setSort2("Stars");
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
                      sort2 === "Stars"
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
                  Stars
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
    </section>
  );
};
