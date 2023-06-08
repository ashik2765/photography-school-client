
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-pink-600">
            <img src={errorImg} alt="Error" className="w-64 h-64 mb-8 rounded-full shadow-xl" />
            <h1 className="text-5xl font-bold text-white mb-4">Oops! Something went wrong.</h1>
            <p className="text-xl text-white text-center mb-8">We apologize for the inconvenience. Please try again later.</p>
            <a href="/" >
               
            </a>
            <Link to="/" className="text-lg text-white bg-pink-500 hover:bg-pink-600 py-4 px-8 rounded-full shadow-xl transition-colors duration-300 ease-in-out transform hover:scale-105">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;