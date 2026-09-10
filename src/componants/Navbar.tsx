import { HiMenu } from "react-icons/hi";
import NavLogo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <div className="sticky w-full ">
           <nav className="flex justify-between container mx-auto h-18 max-w-300 items-center px-5 md-20 lg:px-0">
                <button className="block text-2xl text-gray-600 md:hidden"><HiMenu/></button>
                <img className="h-8 w-auto md-10" src={NavLogo} alt="Navbar Logo" />
                 <ul className="hidden items-center text-4 gap-5 md:flex">
                    <li><a href="#" className="text-blue-500 transition hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-blue-500 transition hover:text-blue-500">Technologies</a></li>
                    <li><a href="#" className="text-blue-500 transition hover:text-blue-500">Projects</a></li>
                    <li><a href="#" className="text-blue-500 transition hover:text-blue-500">About</a></li>
                    <li><a href="#" className="text-blue-500 transition hover:text-blue-500">Contact</a></li>
                 </ul>
                <div className="flex items-center gap-2 md:gap-3">
                    <button className="btn btn-active bg-white border-none font-semibold rounded-3xl px-5 py-2 md:px-6">Sign In</button>
                    <button className="btn btn-secondary rounded-3xl px-5 py-2 md:px-6">Sign Up</button>
                </div>
           </nav>
        </div>
    );
};

export default Navbar;