import React, { useState } from 'react';

// example 1
// const App: React.FC = () => {
//     const [counter, setCounter] = useState(0);

//     function counterHandler() {
//         setCounter(counter + 1);
//     }

//     return (
//         <>
//             <h1>Counter: {counter}</h1>
//             <button onClick={counterHandler}>+1</button>
//         </>
//     )
// }

// export default App;

// example 2
// const Parent: React.FC = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div onClick={() => { setCount(prev => prev + 1) }}>
//             Parent clicked { count } times
//             <Child />
//         </div>
//     )
// }

// const Child: React.FC = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <button onClick={() => { setCount(count + 1) }}>
//             Child clicked { count } times
//         </button>
//     )
// }

// export default Parent;

// example 3
const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        const cb = (prev: number) => prev + 1;
        setCounter(cb);
        setCounter(cb);
    }

    return (
        <div className='App'>
            <h1>Counter 組件</h1>
            <div>
                counter: {counter}
            </div>
            <br/>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default Counter;