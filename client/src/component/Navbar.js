import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav className="bg-blue-600 shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <svg 
                            className="h-8 w-8 text-white mr-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                            />
                        </svg>
                        <span className="text-white text-xl font-bold">
                            PR Tracker
                        </span>
                    </Link>

                    <div className="flex items-center">
                        <Link 
                            to="/" 
                            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                                location.pathname === '/' 
                                    ? 'bg-blue-700' 
                                    : 'hover:text-blue-200'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/dashboard" 
                            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                                location.pathname === '/dashboard' 
                                    ? 'bg-blue-700' 
                                    : 'hover:text-blue-200'
                            }`}
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;