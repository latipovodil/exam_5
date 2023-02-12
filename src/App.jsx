import {
  Profile,
  Following,
  MainRight,
  Repositoryies,
  Followers,
  Projects,
  Packages,
  Stars,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import {
  FutureIdeas,
  Inspiration,
  Stack,
} from "./pages/profilePage/components";

function App() {
  const [data, setData] = React.useState([]);
  const [repo, setRepo] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/odilbekl")
      .then((res) => res.json())
      .then((data) => setData(data));
    fetch("https://api.github.com/users/odilbekl/repos")
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, [0]);

  return (
    <Routes>
      <Route path="/" element={<Home repo={repo} data={data} />} />
      <Route path="/odilbekl/" element={<Profile data={data} repo={repo} />}>
        <Route
          index
          element={
            <MainRight
              key={Math.round(Math.random() * 100)}
              data={data}
              repo={repo}
            />
          }
        />
        <Route
          path="following"
          element={<Following data={data} repo={repo} />}
        />

        <Route path="stars/">
          <Route index element={<Stars />} />
          <Route path="future" element={<FutureIdeas />} />
          <Route path="stack" element={<Stack />} />
          <Route path="inspiraction" element={<Inspiration />} />
          <Route
            path="*"
            element={
              <h1 style={{ color: "#fff", margin: "auto", marginTop: "200px" }}>
                Page not found
              </h1>
            }
          />
        </Route>

        <Route path="packages" element={<Packages data={data} repo={repo} />} />
        <Route
          path="followers"
          element={<Followers data={data} repo={repo} />}
        />
        <Route path="projects" element={<Projects data={data} repo={repo} />} />
        <Route
          path="repository"
          element={<Repositoryies data={data} repo={repo} />}
        />
        <Route
          path="*"
          element={
            <h1 style={{ color: "#fff", margin: "auto", marginTop: "200px" }}>
              Page not found
            </h1>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <h1 style={{ color: "#fff", margin: "auto", marginTop: "200px" }}>
            Page not found
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
