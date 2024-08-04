import { NavLink } from "react-router-dom"; {/* we can use a tags in nav but it refreshes the page link doesnt */}
import logo from "../assets/images/yticon2.png";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-navi border-b border-navi ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/*logo */}
              <NavLink
                className="flex flex-shrink-0 items-center mr-4"
                to="/"
              >
                <img className="h-12 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  NHK jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={({isActive})=>isActive? 'text-white bg-black rounded-md px-3 py-2':'text-white hover:bg-pahe rounded-md px-3 py-2'}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={({isActive})=>isActive? 'text-white bg-black rounded-md px-3 py-2':'text-white hover:bg-pahe rounded-md px-3 py-2'}
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/addJob"
                    className={({isActive})=>isActive? 'text-white bg-black rounded-md px-3 py-2':'text-white hover:bg-pahe rounded-md px-3 py-2'}
                  >
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
