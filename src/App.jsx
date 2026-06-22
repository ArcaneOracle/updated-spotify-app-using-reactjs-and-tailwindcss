import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage.jsx'
import Profile from './pages/Profile.jsx'
import MySongs from './pages/MySongs.jsx'

import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'

import songs from './songs.js'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="mainDiv" className="min-h-screen flex flex-col">
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Menu />

      <div className="grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/songs"
            element={
            <MySongs
              songs={songs}
              isLoggedIn={isLoggedIn}
            />}
          />

          <Route
            path="/profile"
            element={
            <Profile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }/>

        </Routes>
      </div>

      <Footer
        isLoggedIn={isLoggedIn}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  )
}

export default App