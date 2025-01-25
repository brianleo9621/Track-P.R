const PRReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRS':
            return {
                ...state,
                personalRecords: action.payload,
                loading: false,
                error: null
            };
            
        case 'ADD_PR':
            return {
                ...state,
                personalRecords: [action.payload, ...state.personalRecords],
                loading: false,
                error: null
            };
            
        case 'DELETE_PR':
            return {
                ...state,
                personalRecords: state.personalRecords.filter(pr => pr._id !== action.payload),
                loading: false,
                error: null
            };
            
        case 'PR_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
            
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            };
            
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };
            
        default:
            return state;
    }
};

export default PRReducer;