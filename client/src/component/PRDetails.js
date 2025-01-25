import React, { useContext, useEffect } from 'react';
import PRContext from '../context/PRContext';

const PRDetails = () => {
    const { personalRecords, getPRs, deletePR, loading, error } = useContext(PRContext);

    useEffect(() => {
        getPRs();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="text-xl text-gray-600">Loading records...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
                Error loading records: {error}
            </div>
        );
    }

    if (personalRecords.length === 0) {
        return (
            <div className="text-center p-8 text-gray-600">
                No personal records found. Add some records to get started!
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Personal Records</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {personalRecords.map((record) => (
                    <div 
                        key={record._id} 
                        className="bg-white p-6 rounded-lg shadow"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-2">
                                {record.exercise}
                            </h3>
                            <button
                                onClick={() => deletePR(record._id)}
                                className="text-red-500 hover:text-red-700"
                                aria-label="Delete record"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-2">
                            <p className="text-gray-700">Weight: {record.weight} lbs</p>
                            <p className="text-gray-700">Reps: {record.reps}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {new Date(record.date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PRDetails;