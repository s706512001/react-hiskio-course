import React, { useState, useRef, useEffect } from 'react'

const App: React.FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // const element = document.getElementById('h1');
        console.log(h1Ref.current)
    }, []);

    return (
        <>
            {/* <h1 id='h1'>Ref</h1> */}
            <h1 ref={h1Ref}>Ref</h1>
        </>
    )
}

export default App;