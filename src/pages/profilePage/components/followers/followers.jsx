import React from "react";
import { Link } from "react-router-dom";
import "./followers.scss";

export const Followers = () => {
  const [followers, setFollowers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/users/odilbekl/followers")
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  }, []);
  return (
    <ul className="followers">
      {followers?.map((el) => (
        <li key={el.id} className="followers__user">
          <a target="_blank" href={el.html_url}>
            {" "}
            <div>
              <div className="followers__user-img">
                <img src={el.avatar_url} alt="avatar url" />
              </div>
              <h2 className="followers__user-name">{el.login}</h2>
            </div>
            <input
              id={el.id}
              type="checkbox"
              className="followers__user-input"
            />
            <label className="followers__user-unfollow" htmlFor={el.id}></label>
          </a>
        </li>
      ))}
    </ul>
  );
};
