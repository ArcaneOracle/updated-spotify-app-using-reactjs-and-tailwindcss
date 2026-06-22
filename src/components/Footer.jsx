function Footer({ username, email, password, isLoggedIn}) {
  return (
    <footer className="w-full flex flex-row items-center justify-between p-4">
      <p>{isLoggedIn ? `Welcome, ${username}!` : "No username set"}</p>
      <p>{isLoggedIn ? `Email: ${email}!` : "No email set"}</p>
      <p>{isLoggedIn ? `Password (Experimental): ${password}!` : "No password set (experimental)"}</p>
    </footer>
  )
}
export default Footer;