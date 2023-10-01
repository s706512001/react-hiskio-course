import React, { useState, useRef } from 'react'

const App: React.FC = () => {
    const [hidden, setHidden] = useState(false);
    const sumRef = useRef(0);

    function click() {
        sumRef.current++;
        if (sumRef.current === 5) {
            setHidden(true);
        } else if (sumRef.current > 15) {
            setHidden(false);
        }
    }

    return (
        <>
            <h1>Ref</h1>
            <button onClick={click}>+1</button>
            { hidden && <div>被隱藏的區塊</div> }
        </>
    )
}

export default App;