// Icons
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

// Styling
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <LibraryBooksIcon />
      <h1 className="nav-title">Mini Books</h1>
    </nav>
  );
};

export default Navbar;
