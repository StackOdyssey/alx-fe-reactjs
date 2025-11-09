import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Header */}
      <h1>Vite + React</h1>

      {/* Counter Section */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Simple Counter App */}
      <h1>Simple Counter App</h1>
      <Counter />

      {/* Welcome Message */}
      <WelcomeMessage />

      {/* User Profile */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      {/* Main Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Profile Page with Context */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App;
