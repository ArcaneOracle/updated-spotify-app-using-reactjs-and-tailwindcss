import { Link, useLocation } from "react-router-dom";

function Menu()  {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="px-4 py-2">
      <ul className="w-fit space-x-4">
        <li>Menu</li>
        {pathname !== "/" && (
            <Link to="/">Landing Page</Link>
        )}
        {pathname !== "/songs" && (
            <Link to="/songs">Song Listing</Link>
        )}
          {pathname !== "/profile" && (
            <Link to="/profile">Profile</Link>
          )}
      </ul>
    </nav>
  )
}
export default Menu;