import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <div>
            {/* (including website logo or name or both, copyright, some contact information, Address etc.) */}
            <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <div className="container mx-auto py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center md:text-left ms-4">
                            <div className="logo-section flex items-center">
                                {/* Your logo here */}
                                <img src={logo} alt="Logo" className=" mx-auto mt-16 md:mx-0 h-10 md:h-12" />
                                
                            </div>
                        </div>
                        <div>
                            <div className="about-section">
                                {/* About information */}
                                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                <p className="text-gray-400 leading-relaxed">
                                Capture the essence of summer at our Photography Camp! Join young students in hands-on activities, workshops, and field trips to explore the art of photography. Ignite creativity, learn techniques, and create lasting memories. Enroll today!
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="social-section me-5">
                                {/* Social links */}
                                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                                <ul className="">
                                    <li>
                                        <p>+974 553420</p>
                                    </li>
                                    <li>
                                        <p> visuailvoyage@gmail.com</p>
                                    </li>
                                    <li>
                                        <p>www.visualvoyage.edu</p>
                                    </li>
                                </ul>
                            </div>
                            {/* Copy */}
                            <div className="social-section mt-5 me-5">
                                {/* Social links */}
                                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                <ul className="flex justify-center md:justify-end space-x-4">
                                    <li>
                                        <Link className="text-gray-400 hover:text-white transition duration-300">
                                            <i className=" text-blue-600 text-2xl">
                                                <FaFacebook></FaFacebook>
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white transition duration-300">
                                            <i className=" text-cyan-400 text-2xl">
                                                <FaTwitter />
                                            </i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='#' className="text-gray-400 hover:text-white transition duration-300">
                                            <i className=" text-pink-700 text-2xl">
                                                <FaInstagram />
                                            </i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4 md:py-6">
                    <div className="container mx-auto text-center text-sm text-gray-400">
                        <p className="mb-2">&copy; {currentYear} Summer Camp. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;