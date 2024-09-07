const initialState = {
    currentValue: 0.0,
    num: 0.0,
    operator: null,
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUM':
            // Combine previous number with new number
            return {
                ...state,
                num: parseFloat(`${state.num}${action.payload}`), // Concatenate previous number with new one
            };
        case 'ADDITION':
            return {
                ...state,
                currentValue: state.num,
                num: 0,
                operator: '+',
            };
        case 'SUBTRACTION':
            return {
                ...state,
                currentValue: state.num,
                num: 0,
                operator: '-',
            };
        case 'MULTIPLICATION':
            return {
                ...state,
                currentValue: state.num,
                num: 0,
                operator: '*',
            };
        case 'DIVISION':
            return {
                ...state,
                currentValue: state.num,
                num: 0,
                operator : '/',
            };
        case 'MODULUS':
            return {
                ...state,
                currentValue: state.num,
                num: 0,
                operator: '%',
            };
        case 'EQUALS_TO': {
            if (state.operator === '+') {
                return {
                    ...state,
                    currentValue: state.currentValue + state.num,
                    num: 0,
                };
            } else if (state.operator === '-') {
                return {
                    ...state,
                    currentValue: state.currentValue - state.num,
                    num: 0,
                };
            } else if (state.operator === '*') {
                return {
                    ...state,
                    currentValue: state.currentValue * state.num,
                    num: 0,
                };
            } else if (state.operator === '/') {
                if (state.num === 0) {
                    return {
                        ...state,
                        currentValue: 'ERROR',
                    };
                }
                return {
                    ...state,
                    currentValue: (state.currentValue / state.num).toFixed(5),
                    num: 0,
                };
            } else if (state.operator === '%') {
                if (state.num === 0) {
                    return {
                        ...state,
                        currentValue: 'ERROR',
                    };
                }
                return {
                    ...state,
                    currentValue: (state.currentValue % state.num).toFixed(5),
                    num: 0,
                };
            } else {
                return {
                    ...state,
                    currentValue: 'ERROR',
                };
            }
        }
        case 'CLEAR': 
            return {
                ...state,
                num: 0,
                currentValue: 0,
                operator: null,
            };
        default:
            return state;
    }
};

export default CalculatorReducer;
