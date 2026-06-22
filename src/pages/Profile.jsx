import {useState} from "react";
import spotifyLogo from "../assets/images/spotifyLogo.svg";

function Profile( {isLoggedIn, setIsLoggedIn, username, email, password, setUsername, setEmail, setPassword } ) {

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);

      setUsername("");
      setEmail("");
      setPassword("");

      return;
    }

    if (!username || !email || !password) {
      alert("Please complete all fields");
      return;
    }

    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full">
      <h1 className="text-4xl">Profile Page</h1>
      <form>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <label htmlFor="username" className="w-24 text-right">
              Username:
            </label>
            <input
              id="username"
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="items-end px-2 py-1"
              required={true}
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="email" className="w-24 text-right">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="items-end px-2 py-1"
              required={true}
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="password" className="w-24 text-right">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="items-end px-2 py-1"
              required={true}
            />
          </div>
          <div className="flex w-full text-center">
            <button className="px-4 py-2 rounded m-auto" onClick={handleLoginLogout} type="button">
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Profile;