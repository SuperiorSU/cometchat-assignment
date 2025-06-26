import { Link } from "react-router-dom";
import logo from "../../assets/icons/cometchat-logo.png";
import btnlogo from '../../assets/icons/button.png'
import Button from "./Button";
const NavBar=()=> {
  const navLinks = [
    {
      name: "Platform",
      path: "/platform",
    },
    {
      name: "Solutions",
      path: "/solution",
    },
    {
      name: "Developers",
      path: "/developers",
    },
    {
      name: "Resourse",
      path: "/resource",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];
  return (
    <header className="px-8 bg-inherit top-0 py-4 lg:h-[68px] md:h-[68px] h-[60px] ">
      <nav className="flex justify-between items-center h-full font-satoshi">
        <div className="h-5 w-32  ">
          <img
            src={logo}
            alt="cometchat-logo"
            className="w-full object-contain"
          />
        </div>
        <div className="lg:block hidden">
          <ul className="flex gap-x-12 text-sm text-[#FAFAFF]">
            {navLinks.map((item, index) => {
              return (
                <li>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex gap-x-4 items-center">
            <div>
              <Link to="/auth/login" className="text-sm text-[#FAFAFF]">
                Login
              </Link>
            </div>
            <div className="lg:block hidden">
              <Button btnLink={"schedule-demo"} btnText={"Schedule a Demo"}/>
            </div>
            <div className="lg:hidden block w-[40px] h-9 rounded-[10px]">
              <button>
                <img src={btnlogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
