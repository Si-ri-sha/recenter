import { useState } from "react";
import "./App.css";
import Configure from "./pages/Configure";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  const [isFocused, setIsFocused] = useState<boolean>(true);

  function handleHelpClick() {
    chrome.tabs.create({ url: "https://recenter.netlify.app/docs" });
  }

  return (
    <div className="app" id={isFocused ? "good" : "bad"}>
      <div className="app__top_bar" id={isFocused ? "good" : "bad"}></div>
      <Routes>
        <Route
          path="/"
          element={
            <Home isFocused={isFocused} setIsFocused={setIsFocused}></Home>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Home isFocused={isFocused} setIsFocused={setIsFocused}></Home>
          }
        ></Route>
        <Route
          path="/configure"
          element={<Configure isFocused={isFocused}></Configure>}
        ></Route>
        <Route
          path="/profile"
          element={<Profile isFocused={isFocused}></Profile>}
        ></Route>
      </Routes>
      <div className="app__help_button" onClick={handleHelpClick}>?</div>
       
      {/* Submission BY SHIREESHA TH */}

      <p style={{ color: 'white' }}>Hello from Shireesha</p>

      {/* Daily reset Summay Box */}

      <div style={{
        padding: '1rem',
        backgroundColor: '#f0f8ff',
        borderRadius: '12px',
        marginTop: '10px',
        color: '#333',
        fontSize: '14px'
      }}>
        <h3 style={{ marginBottom: '0.5rem' }}>🌟 Daily Reset Summary</h3>
        <p>
          Take a moment to reflect. You opened <strong>{window.location.hostname}</strong> and spent a productive day!
        </p>
      </div>
    </div>
  );
}

export default App;
