import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/phones">Phone Collection</NavLink>
    </nav>
  );
};

export default Navbar;
