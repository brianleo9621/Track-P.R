import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Welcome to PR Tracker
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Track your fitness journey and celebrate your achievements. 
                    Record and monitor your personal records to stay motivated 
                    and witness your progress over time.
                </p>
                <Link 
                    to="/dashboard" 
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg 
                             font-semibold hover:bg-blue-700 transition-colors"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Home;