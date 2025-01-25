import React from 'react';
import PRForm from '../components/PRForm';
import PRDetails from '../components/PRDetails';

const Dashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Personal Records Tracker
                </h1>
                <p className="text-gray-600 mt-2">
                    Track and manage your workout achievements
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1">
                    <PRDetails />
                </div>
                <div className="order-1 md:order-2">
                    <PRForm />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;