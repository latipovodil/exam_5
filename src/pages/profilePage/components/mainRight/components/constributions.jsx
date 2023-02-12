import React from "react";
import "./constributions.scss";
import { constir, constir2, constir3 } from "../../../imgs/";
import { Button } from "@mui/material";
export const Constributions = () => {
  const [year, setYear] = React.useState("2022");
  return (
    <div className="const">
      <h3 className="const__title">
        {year === "2022"
          ? "220 contributions in 2022"
          : "41 contributions in 2023"}
      </h3>
      <div className="const__img">
        {year === "2022" ? (
          <img src={constir} alt="constributions" />
        ) : (
          <img src={constir2} alt="constributions" />
        )}
      </div>
      <div className="const__year">
        <Button
          onClick={() => setYear("2023")}
          style={
            year === "2023"
              ? {
                  width: "117px",
                  textAlign: "left",
                  marginTop: "5px",
                  backgroundColor: "#1f6feb",
                  color: "#ffffff",
                }
              : {
                  width: "117px",
                  textAlign: "left",
                  marginTop: "5px",
                  color: "#8b949e",
                }
          }
        >
          2023
        </Button>
        <Button
          onClick={() => setYear("2022")}
          style={
            year === "2022"
              ? {
                  width: "117px",
                  textAlign: "left",
                  marginTop: "5px",
                  backgroundColor: "#1f6feb",
                  color: "#ffffff",
                }
              : {
                  width: "117px",
                  textAlign: "left",
                  marginTop: "5px",
                  color: "#8b949e",
                }
          }
        >
          2022
        </Button>
      </div>
      <img style={{width:"750px",marginTop:"-60px"}} src={constir3} alt="img" />
    </div>
  );
};
