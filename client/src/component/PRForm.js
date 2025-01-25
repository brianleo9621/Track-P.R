import React, { useState, useContext } from 'react';
import PRContext from '../context/PRContext';

const PRForm = () => {
    const { addPR, error } = useContext(PRContext);
    
    const [formData, setFormData] = useState({
        exercise: '',
        weight: '',
        reps: ''
    });

    const { exercise, weight, reps } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newPR = {
            exercise,
            weight: parseFloat(weight),
            reps: parseInt(reps)
        };

        await addPR(newPR);

        // Reset form if submission was successful
        if (!error) {
            setFormData({
                exercise: '',
                weight: '',
                reps: ''
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Personal Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Exercise
                        <input
                            type="text"
                            name="exercise"
                            value={exercise}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mt-1"
                            required
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Weight (lbs)
                        <input
                            type="number"
                            name="weight"
                            value={weight}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mt-1"
                            required
                            min="0"
                            step="0.5"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Reps
                        <input
                            type="number"
                            name="reps"
                            value={reps}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mt-1"
                            required
                            min="1"
                        />
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Record
                </button>
            </form>
            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}
        </div>
    );
};

export default PRForm;