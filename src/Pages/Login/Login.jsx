
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [Error, setError] = useState()
  const navigate = useNavigate()
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        setError('')
        const user = result.user;
        console.log(user)
        Swal.fire({
          title: 'User login Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from,{replace:true})
      })
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded shadow">
        <h2 className="text-3xl text-center font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-0 right-0 h-full flex items-center px-2"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.071 4.929a9 9 0 010 14.142M12 17a5 5 0 100-10 5 5 0 000 10z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.6 7.6l2.8-2.8a1 1 0 011.4 1.4l-2.8 2.8a8 8 0 11-11.3 0l-2.8-2.8a1 1 0 011.4-1.4l2.8 2.8a8 8 0 010 11.3l-2.8 2.8a1 1 0 01-1.4-1.4l2.8-2.8a8 8 0 0111.3 0l2.8 2.8a1 1 0 01-1.4 1.4l-2.8-2.8a8 8 0 010-11.3z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className='text-red-600'>{Error}</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Do not have an account?{" "}
            <Link
              className="text-blue-500 hover:text-blue-700 font-semibold"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm text-gray-600">Or sign in with:</span>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;