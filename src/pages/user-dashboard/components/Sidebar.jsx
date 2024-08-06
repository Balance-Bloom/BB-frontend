import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import D from "../../../constants";

const Sidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const currentPath = paths[2];

  const navigate = useNavigate();

  return (
    <>
      <div
        className=" ml-3 text-black flex flex-col relative h-screen overflow-y-hidden overflow-x-hidden w-16 hover:w-52 transition-width"
        style={{ boxShadow: "10px 0 #FF5A7D" }}
      >
        <div className="flex flex-col mt-4">
          {D.DASHBOARDLINKS.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                id="nav"
                className={` flex items-center hover:shadow-lg 
                        
                        ${
                          currentPath == item.path &&
                          "bg-primary text-white rounded-l-[20px]"
                        }`}
              >
                <span className="relative text-center pl-4 min-w-14">
                  {item.Icon}
                </span>
                <span className="relative pl-2 w-full whitespace-nowrap leading-[40px]">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
