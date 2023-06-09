// import { useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../Provider/Authprovider";


const SocialLogin = () => {
    // const { googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";

    const handleGooglelogIn = () => {
        console.log('connected')
        // googleSignIn()
        //     .then(result => {
        //         const loggedInUser = result.user;
        //         console.log(loggedInUser);
        //         const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        //         fetch('http://localhost:5000/users', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(saveUser)
        //         })
        //             .then(res => res.json())
        //             .then(() => {
        //                 navigate(from, { replace: true });
        //             })
        //     })
    }
    return (
        <div className="flex ml-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline" type="button">
              Facebook
            </button>
            <button onClick={handleGooglelogIn} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" type="button">
              Google
            </button>
          </div>
    );
};

export default SocialLogin;