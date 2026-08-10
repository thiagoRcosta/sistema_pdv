import { NavLink } from "react-router";
import { routeElements } from "../Routes";

const iconStyle = {
  fontSize: "1.7rem",
  marginBottom: "0.1rem",
};

const labelStyle = {
  fontSize: "0.8rem",
};

function Header() {
  const menuItems = routeElements.filter(({ handle }) => handle?.menu?.show);

  return (
    <nav className="container flex w-full overflow-hidden bg-(--color-primary) mx-auto rounded-xl mt-4 shadow-md shadow-black/20">
      {menuItems.map(({ path, handle }) => {
        const { label, icon: Icon } = handle.menu;

        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `w-full flex flex-col items-center text-center text-white p-3
              transition-colors duration-200
              ${
                isActive
                  ? "bg-(--color-secondary) font-bold"
                  : "hover:bg-black/20"
              }`
            }
          >
            <Icon style={iconStyle} />

            <span style={labelStyle}>{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Header;
