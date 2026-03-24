import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="border-bottom">
      <nav className="d-flex justify-content-end py-3">
        <Link to="/"><div className="mx-3">Home</div></Link>
        {/* <Link to="/profile"><div className="mx-3">Profile</div></Link> */}
        <Link to="/about"><div className="mx-3">About me</div></Link>
      </nav>
    </header>
  );
};