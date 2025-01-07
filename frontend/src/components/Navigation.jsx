import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { BiBookContent } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { GrSchedulePlay } from "react-icons/gr";
import { MdAddHomeWork } from "react-icons/md";
import { TbEmergencyBed } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const navigate = useNavigate();
  let loginUser;
  const { auth } = useSelector((state) => state?.auth);
  if (auth) {
    loginUser = auth?.user;
  }

  function handleNavigation(link) {
    navigate(link);
  }
  return (
    <>
      <Navbar
        fluid
        rounded
        className="px-4 text-primaryText bg-slate-100 shadow-md"
      >
        <Navbar.Brand href="/">
          <img
            src="logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Mama care logo"
          />
        </Navbar.Brand>
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
                onClick={() => handleNavigation(`/profile/${loginUser?.id}`)}
              >
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("/profile/1")}>
                Settings
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("/profile/1")}>
                Earnings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleNavigation("/profile/1")}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}

        <Navbar.Collapse className="lg:ml-72">
          {NAVIGATION_LINKS.map((link) => (
            <Navbar.Link
              key={link.name}
              href={link.url}
              className="flex items-center font-normal  hover:text-primary hover:bg-secondary rounded-md "
            >
              {link.icon}
              <span className="ml-1">{link.name}</span>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
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
