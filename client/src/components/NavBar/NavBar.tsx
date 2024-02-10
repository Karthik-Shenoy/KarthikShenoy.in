import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <>
      <nav className="z-20 bg-beige-100 flex items-center py-4 shadow-lg sticky top-0 w-screen">
        <div className="text-lg font-medium mx-auto font-mono font-bold">
          Karthik Shenoy
        </div>
        <div className="nav-links flex justify-center flex-col sm:flex-row">
          <a
            href="/"
            className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono"
          >
            Home
          </a>
          <Link
            to="/projects"
            className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono"
          >
            Projects
          </Link>
          <Link
            to="/resources"
            className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono"
          >
            Resources
          </Link>
          <a
            href="/"
            className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-beige-400 hover:shadow-md transition duration-500 font-mono"
          >
            Contact
          </a>
        </div>
        <div className="social-links flex mx-auto">
          <a href="/" className="text-beige-800 mx-4 hover:text-beige-600">
            <i className="fab fa-github"></i>
          </a>
          <a href="/" className="text-beige-800 mx-4 hover:text-beige-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="text-beige-800 mx-4 hover:text-beige-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
    </>
  );
}
