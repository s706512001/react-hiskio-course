import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
    // 1. mount
    // useEffect(() => {
    //     console.log("hello")
    // }, [])

    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('偶數');
    const clickHandler = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setText(counter % 2 === 0 ? '偶數' : '奇數');
    }, [counter]);

    return (
        <>
            <h1>counter: {counter}</h1>
            <button onClick={clickHandler}>+1</button>
            <p>{text}</p>
        </>
    );
}

export default App;