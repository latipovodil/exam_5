import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ el }) => {
  return (
    // <Tooltip
    //   title={
    //     <div className="pageLeft__link-item">
    //       <div className="main-right__repo-text-box repo__item-link-box">
    //         <span>
    //           {" "}
    //           <a
    //             target="_blank"
    //             style={{ display: "inline" }}
    //             href={el.html_url}
    //             className="pageLeft-el-link"
    //           >
    //             {el.name}
    //           </a>
    //           <span
    //             className="main-right__repo-type repo__item-type-public"
    //             style={{ display: "inline" }}
    //           >
    //             {el.visibility}
    //           </span>
    //         </span>
    //       </div>
    //       <div>
    //         <div
    //           style={{ marginTop: "15px" }}
    //           className="main-right__repo-bottom"
    //         >
    //           {el.language ? (
    //             <p
    //               style={{ marginRight: "7px" }}
    //               className="main-right__repo-language"
    //             >
    //               <span
    //                 style={
    //                   el.language === "CSS"
    //                     ? { backgroundColor: "#563d7c" }
    //                     : el.language === "JavaScript"
    //                     ? { backgroundColor: "#f1e05a" }
    //                     : {}
    //                 }
    //               ></span>

    //               {el.language}
    //             </p>
    //           ) : (
    //             ""
    //           )}

    //           {el.stargazers_count > 0 ? (
    //             <p className="main-right__repo-stars">
    //               <svg
    //                 ariaLabel="stars"
    //                 role="img"
    //                 height="16"
    //                 viewBox="0 0 16 16"
    //                 version="1.1"
    //                 width="16"
    //                 data-view-component="true"
    //                 className="overview-icon"
    //               >
    //                 <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
    //               </svg>
    //               <span style={{ marginRight: "7px" }}>
    //                 {el.stargazers_count}
    //               </span>
    //             </p>
    //           ) : (
    //             ""
    //           )}

    //           <p className="main-right__repo-stars">{el.updated_at}</p>
    //         </div>
    //       </div>
    //     </div>
    //   }
    //   arrow
    // >
      <li key={el.id} className="pageLeft__card">
        <div
          className="card__img-box"
          style={{
            flexShrink: "0",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={el.owner.avatar_url} alt="profil img" />
        </div>
        <Link target="_blank" to={el.html_url}>
          <p>odilbekl/{el.name}</p>
        </Link>
      </li>
    // </Tooltip>
  );
};
