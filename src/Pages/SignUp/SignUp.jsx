import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordMatch, setPasswordMatch] = useState(true);


    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        createUser(data.email, data.password, data.name, data.photo)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                    updateUserProfile(data.name,data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                       
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Create Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
                <div className="bg-white w-full max-w-md p-8 rounded shadow">
                    <h2 className="text-3xl text-center font-bold mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" {...register("name", { required: true })} placeholder="Enter your Name" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photo" name="photo" type="text" {...register("photo", { required: true })} placeholder="Photo URL" />
                            {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" {...register("email", { required: true })} placeholder="Enter your email" />

                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="Enter your password" />

                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must  6 character</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password is too large</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have 1 upercaste 1 lowercase 1 special charector</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                {...register("confirmPassword", { required: true })}
                                placeholder="Re-enter your password"
                            />

                            {errors.confirmPassword?.type === 'required' && (
                                <p className="text-red-600">Please re-enter your password</p>
                            )}

                            {!passwordMatch && (
                                <p className="text-red-600">Passwords do not match</p>
                            )}
                        </div>
                       
                        <div className="flex items-center justify-center">
                            <input className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">Have an account? <Link className="text-blue-500 hover:text-blue-700 font-semibold" to="/login">Login</Link></p>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <span className="text-sm text-gray-600">Or sign in with:</span>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;