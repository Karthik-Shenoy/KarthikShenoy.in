import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="bg-white flex items-center py-4 shadow-lg">
                <div className="text-lg font-medium mx-auto font-mono font-bold">Karthik Shenoy</div>
                <div className="nav-links flex justify-center">
                    <a href="/" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-indigo-100 hover:shadow-md transition duration-500 font-mono">Home</a>
                    <Link to="/projects" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-indigo-100 hover:shadow-md transition duration-500 font-mono">Projects</Link>
                    <Link to="/resources" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-indigo-100 hover:shadow-md transition duration-500 font-mono">Resources</Link>
                    <a href="/" className="rounded-lg px-5 py-2 text-black mx-3 hover:bg-indigo-100 hover:shadow-md transition duration-500 font-mono">Contact</a>
                </div>
                <div className="social-links flex mx-auto">
                    <a href="/" className="text-indigo-400 mx-4 hover:text-indigo-200">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="/" className="text-indigo-400 mx-4 hover:text-indigo-200">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="text-indigo-400 mx-4 hover:text-indigo-200">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}
