import React, { useState, useEffect, useMemo, useCallback } from "react";

type Props = {}

const App: React.FC = () => {
    const [value, setValue] = useState(false);

    const memoObj = useMemo(() => {
        const obj = { name: "richard", data: {} }
        return obj;
    }, [])

    const memeFun = useCallback(function() {

    }, [])

    useEffect(() => {

    }, [memoObj])

    return (
        <>
            <h1>App</h1>
            <button onClick={ () => {setValue(!value) }}>
                rerender
            </button>
        </>
    )
}

export default App;