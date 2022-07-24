import {useReducer, useState} from "react";
import {IonButton} from "@ionic/react";

const initialState = {count: 0, testingcount: 1};

export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1, testingcount: state.count + 3};
        case 'decrement':
            return {count: state.count - 1, testingcount: state.count + 3};
        default:
            throw new Error();
    }
}

const Counter = () => {

    const [array, setArray] = useState<Array<number>>([1, 2, 3, 4, 5])

    const leftRotation = (array: Array<number>) => {
        array.push(array[0])
        array.shift()

        const t = array
        setArray(t)
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {/*Count {state.count} {state.testingcount}*/}
            {/*<button onClick={() => dispatch({ type: 'decrement' })}>-</button>*/}
            {/*<button onClick={() => dispatch({ type: 'increment' })}>+</button>*/}
            <IonButton onClick={() => leftRotation(array)}> fire </IonButton>
            {array}
        </>
    )
}

export default Counter;