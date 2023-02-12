import React from "react";
import "./mainLeft.scss";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/";
import { LinearProgress } from "@mui/material";
export const MainLeft = ({ data }) => {
  return (
    <section className="main-left">
      <div className="main-left__container">
        <div className="main-left__profil-img">
          {data?.avatar_url ? (
            <img src={data?.avatar_url} alt="profil img" />
          ) : (
            <CircularProgress
              style={{
                color: "#fff",
                margin: "auto",
                marginTop: "200px",
                display: "block",
              }}
            />
          )}{" "}
        </div>
        <div className="main-left__amoji">
          <div>
            <svg
              className="overview-icon"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              ariaHidden="true"
            >
              <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
            </svg>
          </div>
        </div>
        <div className="main-left__title-box">
          <h2>
            {data?.avatar_url ? (
              data.name
            ) : (
              <CircularProgress
                style={{ width: "15px", height: "15px", marginLeft: "10px" }}
              />
            )}{" "}
          </h2>
          <p>
              {data?.avatar_url ? (
                data.login
              ) : (
                <CircularProgress
                  style={{ width: "15px", height: "15px", marginLeft: "10px" }}
                />
              )}{" "}
          </p>
        </div>
        <div className="main-left__edit-button-box">
          <button className="main-left__edit-button">Edit profile</button>
        </div>
        <div className="main-left__follow-box">
          <Link to="/followers" className="main-left__followers">
            <svg
              text="muted"
              ariaHidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="overview-icon"
            >
              <path d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
            </svg>
            <span>
              {data?.avatar_url ? (
                data.followers
              ) : (
                <CircularProgress
                  style={{ width: "15px", height: "15px", marginLeft: "10px" }}
                />
              )}
            </span>
            <p>followers</p>
          </Link>
          <Link to="/following" className="main-left__following">
            <span>
              {data?.avatar_url ? (
                data.following
              ) : (
                <CircularProgress
                  style={{ width: "15px", height: "15px"}}
                />
              )}
            </span>
            <p>following</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
