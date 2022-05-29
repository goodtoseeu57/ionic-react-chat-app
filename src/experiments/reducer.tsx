import { useReducer } from "react";

const initialState = { count: 0, testingcount: 1 };

export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1, testingcount: state.count + 3 };
        case 'decrement':
            return { count: state.count - 1, testingcount: state.count + 3 };
        default:
            throw new Error();
    }
}

const Counter = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    return (
        <>
            Count {state.count} {state.testingcount}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>

        </>
    )
}

export default Counter;