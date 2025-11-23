import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubApi";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: fetch Octocat on mount
    fetchUserData("octocat")
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Show fetched GitHub user info */}
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}

      <Search />
    </>
  );
}

export default App;