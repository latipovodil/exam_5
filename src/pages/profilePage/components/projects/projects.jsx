import {
  Button,
  Checkbox,
  ClickAwayListener,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./projects.scss";

export const Projects = ({ data }) => {
  const search = useRef(null);
  const [createNew, setCreateNew] = React.useState(false);
  const [type, setType] = React.useState("Recently updated");
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen2 = () => {
    setOpen2(true);
  };
    const handleTooltipClose2 = () => {
    setOpen2(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const clearInput = () => {
    if (search.current) {
      search.current.value = "";
    }
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [age, setAge] = React.useState("odilbekl");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="projects">
      <div className="projects__header">
        <input
          ref={search}
          placeholder="Find a repository..."
          ariaLabel="Find a repository..."
          className="repo__search projects__search"
          type="text"
        />
        <button onClick={() => clearInput()} className="projects__input-clear">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            style={{ fill: "#000" }}
          >
            <path
              fill-rule="current-color"
              d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
            ></path>
          </svg>
        </button>
        <a
          target="_blank"
          href="https://github.com/users/odilbekl/projects?type=new"
        >
          <Button variant="contained" color="success">
            New project
          </Button>
        </a>
      </div>
      <div className="projects__main">
        <div className="project__main-header">
          <Link
            to="https://github.com/users/odilbekl/projects?query=is%3Aopen"
            target="_blank"
            className="project__main-header-el"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              style={{ fill: "#fff" }}
            >
              <path
                fill-rule="evenodd"
                d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
              ></path>
            </svg>
            <h2 className="project__main-text">3 Open</h2>
          </Link>
          <Link
            className="projects__main-header-el2"
            to="https://github.com/users/odilbekl/projects?query=is%3Aclosed"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="overview-icon"
            >
              <path
                fill-rule="evenodd"
                d="M1.75 2.5a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H1.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0114.25 6H1.75A1.75 1.75 0 010 4.25v-1.5zM1.75 7a.75.75 0 01.75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-5.5a.75.75 0 111.5 0v5.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25v-5.5A.75.75 0 011.75 7zm4.5 1a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5h-3.5z"
              ></path>
            </svg>
            <p className="projects__main-text2">0 Closed</p>
          </Link>
          {createNew ? (
            <div className="repo__item-rl">
              <div
                onClick={() => setCreateNew(false)}
                className="header__createNew-close"
              ></div>
              <ul
                style={{ width: "215px", padding: "0" }}
                className="header__createNew header__createNew2"
              >
                <li
                  style={{
                    borderTop: "1px solid #21262d",
                    borderBottom: "1px solid #21262d",
                  }}
                  onClick={() => {
                    setType("Recently updated");
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
                      type === "Recently updated"
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
                  Recently updated
                </li>
                <li
                  style={{
                    borderTop: "1px solid #21262d",
                    borderBottom: "1px solid #21262d",
                  }}
                  onClick={() => {
                    setType("Newest");
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
                      type === "Newest"
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
                    setType("Oldest");
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
                      type === "Oldest"
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
                    setType("Least recently updated");
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
                      type === "Least recently updated"
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
                  Least recently updated
                </li>
                <li
                  style={{
                    borderTop: "1px solid #21262d",
                    borderBottom: "1px solid #21262d",
                  }}
                  onClick={() => {
                    setType("Name");
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
                      type === "Name"
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
              </ul>
            </div>
          ) : (
            ""
          )}
          <button
            className="repo__type repo__type2"
            onClick={() => setCreateNew(true)}
          >
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
        </div>
        <div className="project__main-item">
          <div>
            <Link
              target="_blank"
              to="https://github.com/users/odilbekl/projects/3"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                style={{ fill: "#fff" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                ></path>
              </svg>
              <h3 className="project__main-text">
                @odilbekl's untitled project
              </h3>{" "}
              <span
                className="main-right__repo-type repo__item-type-public"
                style={{ display: "inline-block", width: "auto" }}
              >
                Private
              </span>
            </Link>
            <span
              style={{ marginTop: "10px" }}
              className="projects__main-text2"
            >
              #3 updated 8 hours ago
            </span>
          </div>

          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={
                  <div className="project__main-item-modal-box">
                    <button onClick={handleClickOpen}>
                      <svg
                        ariaHidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="overview-icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
                        ></path>
                      </svg>{" "}
                      Make a copy
                    </button>
                    <button>
                      <Link
                        target="_blank"
                        to="https://github.com/odilbekl?tab=projects"
                      >
                        <svg
                          ariaHidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="overview-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.75 2.5a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H1.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0114.25 6H1.75A1.75 1.75 0 010 4.25v-1.5zM1.75 7a.75.75 0 01.75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-5.5a.75.75 0 111.5 0v5.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25v-5.5A.75.75 0 011.75 7zm4.5 1a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5h-3.5z"
                          ></path>
                        </svg>{" "}
                        Close project
                      </Link>
                    </button>
                  </div>
                }
                arrow
              >
                <div onClick={handleTooltipOpen}>
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="overview-icon"
                  >
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
              </Tooltip>

              <Dialog
                className="project__modal2"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Make a copy
                  </DialogContentText>
                  <DialogContentText
                    style={{ marginTop: "15px" }}
                    id="alert-dialog-description"
                  >
                    You can make a copy of this project and use it as a starting
                    point for another project
                  </DialogContentText>
                  <DialogContentText>
                    <svg
                      ariaLabel="Green checkmark"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>{" "}
                    Views and custom fields will be copied.
                  </DialogContentText>
                  <DialogContentText>
                    --- Issues, pull requests, workflows, and insights will not
                    be copied.
                  </DialogContentText>
                  <DialogContentText>
                    <Checkbox
                      defaultChecked
                      style={{ margin: "0", width: "5px", height: "5px" }}
                    />
                    Draft issues will be copied if selected
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-description">
                    Owner
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                    >
                      <MenuItem
                        style={{ display: "flex", alignItems: "center" }}
                        value={data?.login}
                      >
                        <img
                          style={{
                            borderRadius: "200px",
                            width: "30px",
                            height: "30px",
                            marginBottom: "-10px",
                            marginRight: "7px",
                          }}
                          src={data?.avatar_url}
                          alt=""
                        />
                        <em>{data?.login}</em>
                      </MenuItem>
                    </Select>
                  </DialogContentText>

                  <DialogContentText>
                    New project name
                    <input
                      placeholder="Find a repository..."
                      ariaLabel="Find a repository..."
                      className="repo__search"
                      type="text"
                      defaultValue="[COPY] @odilbekl's untitled project"
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <button
                    style={{ width: "120px", marginTop: "0", height: "37px" }}
                    className="main-left__edit-button"
                  >
                    Cancel
                  </button>
                  <Link
                    target="_blank"
                    to="https://github.com/users/odilbekl/projects/4"
                  >
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant="contained"
                      color="success"
                      onClick={handleClose}
                      autoFocus
                    >
                      Copy project
                    </Button>
                  </Link>
                </DialogActions>
              </Dialog>
              {/* make a copy */}
            </div>
          </ClickAwayListener>
        </div>

        

      </div>
    </div>
  );
};
