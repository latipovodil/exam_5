import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import { logo } from "../../imgs";
export const Header = ({ data }) => {
  const [createNew, setCreateNew] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(false);
  const [hamburger, setHamburger] = React.useState(false);
  const search = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.key;
      if (key + "" === "/") {
        if (search.current) {
          if (!(document.activeElement === search.current)) {
            search.current.focus();
            let str = "";
            for (let i = 0; i < search.current.value.length; i++) {
              str += search.current.value[i];
            }
            setTimeout(() => {
              search.current.value = str;
            }, 1);
          }
        }
      }
    });
  }, []);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__desktop">
          <div className="header__left-respon">
            <IconButton
              onClick={() => setHamburger(!hamburger)}
              style={{ color: "#fff" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ fill: "#fff" }}
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </IconButton>
          </div>
          <div className="header__left">
            <Link to="/" className="header__logo-box">
              <img src={logo} alt="github logo" />
            </Link>
            <input
              className="header__search-input"
              ref={search}
              id="outlined-basic"
              placeholder="Search or jumb to..."
              variant="outlined"
            />
            <nav>
              <ul className="header__nav">
                <li>
                  <Link target="_blank" to="https://github.com/pulls">
                    Pull request
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://github.com/issues">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://github.com/codespaces">
                    Codespaces
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://github.com/marketplace">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://github.com/explore">
                    Explore
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <svg
              ariaHidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              style={{ fill: "#fff" }}
            >
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
              <path d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
              {/*  */}
            </svg>
            <div className="header__right-el">
              <IconButton
                onClick={() => setCreateNew(true)}
                style={{ color: "#fff" }}
              >
                {/* file */}
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  style={{ fill: "#fff" }}
                >
                  <path d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "-3px", fill: "#fff" }}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </IconButton>
              {createNew ? (
                <div>
                  <div
                    onClick={() => setCreateNew(false)}
                    className="header__createNew-close"
                  ></div>
                  <ul className="header__createNew">
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://github.com/new"
                      >
                        {" "}
                        New repository
                      </a>
                    </li>
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://github.com/new/import"
                      >
                        Import repository
                      </a>
                    </li>
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://github.com/new/import"
                      >
                        {" "}
                        New codespace
                      </a>
                    </li>
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://gist.github.com/"
                      >
                        {" "}
                        New gist
                      </a>
                    </li>
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://github.com/organizations/new"
                      >
                        New organization
                      </a>
                    </li>
                    <li>
                      <a
                        className="header__createNew-items"
                        target="_blank"
                        href="https://github.com/users/odilbekl/projects/2"
                      >
                        {" "}
                        New project
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}

              <IconButton
                onClick={() => setProfileMenu(true)}
                style={{ color: "#fff" }}
              >
                <div className="header__avatar-box">
                  {data?.avatar_url ? (
                    <img src={data?.avatar_url} alt="avatar" />
                  ) : (
                    <CircularProgress
                      style={{ width: "25px", height: "25px" }}
                    />
                  )}
                </div>

                <svg
                  style={{ marginLeft: "-3px", fill: "#fff" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </IconButton>
              {profileMenu ? (
                <div>
                  <div
                    onClick={() => setProfileMenu(false)}
                    className="header__createNew-close"
                  ></div>

                  <div className="header__createNew header__profile-menu">
                    <div className="signedin__box">
                      <Link to="/">
                        Signed in as <span>odilbekl</span>
                      </Link>
                    </div>
                    <div className="header__setStatus">
                      <div>
                        <svg
                          className="overview-icon"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                          ></path>
                        </svg>
                        <p>Set status</p>
                      </div>
                    </div>
                    <ul className="header__link-sections">
                      <li>
                        <Link to="/odilbekl">Your profile</Link>
                      </li>
                      <li>
                        <Link to="/odilbekl/repository">Your repositories</Link>
                      </li>
                      <li>
                        <Link to="/odilbekl/projects">Your projects</Link>
                      </li>
                      <li>
                        <Link to="/odilbekl/stars">Your stars</Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="https://gist.github.com/odilbekl"
                        >
                          Your gists
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="https://github.com/sponsors/accounts"
                        >
                          Your sponsors
                        </Link>
                      </li>
                    </ul>

                    <ul className="header__link-sections">
                      <li>
                        <Link to="https://github.com/settings/billing/plans">
                          Upgrade
                        </Link>
                      </li>
                      <li>
                        <Link to="https://github.com/organizations/enterprise_plan?ref_cta=Try%2520Enterprise&ref_loc=user_drawer_side_panel&ref_page=Header+Avatar">
                          Try Enterprise
                        </Link>
                      </li>
                      <li>
                        <Link>Feature preview</Link>
                      </li>
                      <li>
                        <Link to="https://docs.github.com/en">Help</Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          to="https://github.com/settings/profile"
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                    <Link className="logout" to="https://github.com/logout">
                      Sign out
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {hamburger ? (
          <div className="header__respon">
            <TextField
              id="outlined-basic"
              placeholder="Search or jumb to..."
              variant="outlined"
            />
            <ul className="header__respon-hamburger">
              <li>
                <p>Dashboard</p>
              </li>
              <li>
                <p>Pull request</p>
              </li>
              <li>
                <p>Issues</p>
              </li>
              <li>
                <p>Codespaces</p>
              </li>
              <li>
                <p>Marketplace</p>
              </li>
              <li>
                <p>Explore</p>
              </li>
              <li>
                <p>Sponsors</p>
              </li>
              <li>
                <p>Settings</p>
              </li>
              <li>
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img src={data?.avatar_url} alt="profil img" />
                </div>
                <p>odilbekl</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ fill: "#fff" }}
                >
                  <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                  <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
                <p>Sign out</p>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
