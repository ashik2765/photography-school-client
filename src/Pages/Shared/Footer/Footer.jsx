import { useEffect, useState } from 'react';
import logo from '../../../assets/logo.jpg';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <div>
            <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <div className="container mx-auto py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center md:text-left ms-4">
                            <div className="logo-section">
                                {/* Your logo here */}
                                <img src={logo} alt="Logo" className="mx-auto md:mx-0 h-10 md:h-12" />
                            </div>
                        </div>
                        <div>
                            <div className="about-section">
                                {/* About information */}
                                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget leo id metus accumsan consequat vel non ex.
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="social-section me-5">
                                {/* Social links */}
                                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                <ul className="flex justify-center md:justify-end space-x-4">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            <i className="fab fa-facebook text-2xl"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            <i className="fab fa-twitter text-2xl"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                            <i className="fab fa-instagram text-2xl"></i>
                                        </a>
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