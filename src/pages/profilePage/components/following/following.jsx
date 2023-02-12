
import React from "react";
import "./following.scss";

export const Following = () => {
  const [following, setFollowing] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/users/odilbekl/following")
      .then((res) => res.json())
      .then((data) => setFollowing(data));
  }, []);
  return (
    <ul className="following">
      {following?.map((el) => (
        <li key={el.id} className="following__user">
          <div>
            <div className="following__user-img">
              <img src={el.avatar_url} alt="avatar url" />
            </div>
            <h2 className="following__user-name">{el.login}</h2>
          </div>

          <input id={el.id} type="checkbox" className="following__user-input" />
          <label className="following__user-unfollow" htmlFor={el.id}></label>
        </li>
      ))}
    </ul>
  );
};
