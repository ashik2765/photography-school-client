
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Authprovider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const Options = <>
    <li><Link>Home</Link></li>
    <li><Link to='/instructor'>Instructor</Link></li>
    <li><Link to='/allclasses'>Classes</Link></li>
    {user ? <><li><Link>Dashboard</Link></li></> : <></>}


  </>
  return (
    <nav className="navbar max-w-screen-xl fixed top-0 z-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" tabIndex={0}>
            {Options}
          </ul>
        </div>
        <h1 className="lg:text-4xl sm:text-xl font-bold text-center lg:py-6 sm:py-2 px-5 text-white tracking-wider shadow-lg rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 ">
          VisualVoyage
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white shadow-lg rounded-lg">{Options}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img className="rounded-full w-8 h-8 object-cover" src="" alt="image" />
            <button onClick={handleLogOut} className="btn rounded-full text-white ml-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg border-none">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn rounded-full text-white ml-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg border-none">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;