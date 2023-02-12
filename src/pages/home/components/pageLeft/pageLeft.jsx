import { Button, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Card } from "./components/card";
import "./pageLeft.scss";
export const PageLeft = ({ data, repo }) => {
  return (
    <div className="pageLeft">
      <div className="pageLeft__header">
        <p className="pageLeft__title">Top repositories</p>
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

      <input
        placeholder="Find a repository..."
        ariaLabel="Find a repository..."
        className="repo__search pageLeft__search"
        type="text"
      />

      <ul className="pageLeft__main">
        {repo.length > 0 ? (
          repo?.map((el) => <Card key={el.id} el={el} />)
        ) : (
          <Box sx={{ width: 400 }}>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              style={{
                borderRadius: "5px",
                height: "40px",
                width: "63%",
                display: "block",
              }}
              animation="wave"
            />
          </Box>
        )}
      </ul>
    </div>
  );
};
