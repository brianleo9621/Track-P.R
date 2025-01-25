import React, { createContext, useReducer } from 'react';
import PRReducer from './PRReducer';
import axios from 'axios';

const PRContext = createContext();

export const PRProvider = ({ children }) => {
    const initialState = {
        personalRecords: [],
        loading: false,
        error: null
    };

    const [state, dispatch] = useReducer(PRReducer, initialState);

    // Get all personal records
    const getPRs = async () => {
        try {
            dispatch({ type: 'SET_LOADING' });
            
            const res = await axios.get('http://localhost:5001/api/pr');
            
            dispatch({
                type: 'GET_PRS',
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: 'PR_ERROR',
                payload: error.response?.data.message || 'Error fetching records'
            });
        }
    };

    // Add new personal record
    const addPR = async (prData) => {
        try {
            dispatch({ type: 'SET_LOADING' });
            
            const res = await axios.post('http://localhost:5001/api/pr', prData);
            
            dispatch({
                type: 'ADD_PR',
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: 'PR_ERROR',
                payload: error.response?.data.message || 'Error adding record'
            });
        }
    };

    // Delete personal record
    const deletePR = async (id) => {
        try {
            dispatch({ type: 'SET_LOADING' });
            
            await axios.delete(`http://localhost:5001/api/pr/${id}`);
            
            dispatch({
                type: 'DELETE_PR',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'PR_ERROR',
                payload: error.response?.data.message || 'Error deleting record'
            });
        }
    };

    // Clear any errors
    const clearError = () => dispatch({ type: 'CLEAR_ERROR' });

    return (
        <PRContext.Provider
            value={{
                personalRecords: state.personalRecords,
                loading: state.loading,
                error: state.error,
                getPRs,
                addPR,
                deletePR,
                clearError
            }}
        >
            {children}
        </PRContext.Provider>
    );
};

export default PRContext;