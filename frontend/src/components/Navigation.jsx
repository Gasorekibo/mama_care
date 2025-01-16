import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { BiBookContent } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";
import { MdAddHomeWork } from "react-icons/md";
import { TbEmergencyBed } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector((state) => state?.auth);
  const loginUser = auth?.user;

  // Custom NavLink component to handle navigation
  // eslint-disable-next-line react/prop-types
  const NavLink = ({ to, children, className }) => {
    const isActive = location.pathname === to;

    return (
      <button
        onClick={() => navigate(to)}
        className={`${className} ${
          isActive ? "text-white bg-blue-500 " : ""
        }  text-left px-3 py-2 transition-colors duration-200`}
      >
        {children}
      </button>
    );
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    navigate("/login");
  };

  return (
    <Navbar
      fluid
      rounded
      className="px-4 text-primaryText bg-slate-100 shadow-md "
    >
      <button onClick={() => navigate("/")} className="flex items-center">
        <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Mama care logo" />
      </button>

      {loginUser && (
        <div className="flex md:order-2 z-50">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={loginUser?.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{loginUser?.full_name}</span>
              <span className="block truncate text-sm font-medium">
                {loginUser?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item
              onClick={() => navigate(`/profile/${loginUser?.id}`)}
            >
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/settings")}>
              Settings
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/earnings")}>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}

      <Navbar.Collapse className="lg:ml-72">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink
            key={link.name}
            to={link.url}
            className="flex items-center font-normal hover:text-white hover:bg-blue-500 rounded-md hover:transition hover:duration-700 hover:ease-in-out"
          >
            {link.icon}
            <span className="ml-1">{link.name}</span>
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

const NAVIGATION_LINKS = [
  {
    name: "Home",
    url: "/",
    icon: <MdAddHomeWork />,
  },
  {
    name: "Pregnancy Education",
    url: "/pregnancy-education",
    icon: <BiBookContent />,
  },
  {
    name: "Appointment",
    url: "/appointment",
    icon: <GrSchedulePlay />,
  },
  {
    name: "Emergence",
    url: "/emergence",
    icon: <TbEmergencyBed />,
  },
  {
    name: "Register",
    url: "/register",
    icon: <CiLogin />,
  },
  {
    name: "Login",
    url: "/login",
    icon: <CiLogin />,
  },
];

export default Navigation;
