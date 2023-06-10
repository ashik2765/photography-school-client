import { NavLink, Outlet } from "react-router-dom";
import {FaBookReader, FaChalkboardTeacher, FaHistory, FaHome, FaWallet } from 'react-icons/fa';
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";




const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open pt-24">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">

                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-purple-500 to-blue-800 text-base-content shadow-lg">
                        
                        {/* Sidebar content here */}

                        <li className="shadow-lg text-white text-xl mb-4"><NavLink to='/dashboard/user'><FaHome />User Home</NavLink></li>
                        <li className="shadow-lg text-white text-xl mb-4"><NavLink to="/dashboard/mycart"><FaBookReader />My Selected Classes</NavLink></li>
                        <li className="shadow-lg text-white text-xl mb-4"><NavLink><FaWallet />My Enrolled Classes</NavLink></li>
                        <li className="shadow-lg text-white text-xl mb-4"><NavLink><FaHistory />Payment History</NavLink></li>
                        <div className="divider"></div>

                        <li className="shadow-lg text-white text-xl mb-4"><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li className="shadow-lg text-white text-xl mb-4"><NavLink><FaBookReader />Classes</NavLink></li>
                        <li className="shadow-lg text-white text-xl mb-4"><NavLink><FaChalkboardTeacher />Instructors</NavLink></li>
                        

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;