import { NavLink } from "react-router-dom";

const RouteNames: Record<string, string> = {};

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        {Object.entries(RouteNames).map(([label, routeName]) => (
          <NavLink key={routeName} to={routeName}>
            {label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
