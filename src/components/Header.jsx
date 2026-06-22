import spotifyLogo from '../assets/images/spotifyLogo.svg'
import { useState, useEffect } from 'react'

function Header({ isLoggedIn, setIsLoggedIn }) {
  function handleLogin() {
    setIsLoggedIn(prev => !prev);
  }

  return (
    <div className="headingDiv flex justify-between">
      <div className="spotifyAndLogo flex flex-row">
        <img className="spotifyLogo" src={ spotifyLogo } alt="Spotify Logo"/>
        <h1 className="spotifyGreen spotifyHeading text-4xl my-auto">Spotify</h1>
      </div>
      <button className="loggedInOrNot rounded-sm py-2 px-4 h-fit w-fit my-auto" onClick={handleLogin}>{isLoggedIn ? "Logged In" : "Please Log In"}</button>
    </div>
  )
}

export default Header;