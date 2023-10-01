import React, { useState, useEffect, useMemo, useCallback, memo } from "react";

type Props = {}
type PropsB = {
    num: number,
    obj: { name: string }
}

const B: React.FC<PropsB> = memo(({ num, obj }) => {
    console.log("B")
    return <p>B {num} {obj.name}</p>
})

const App: React.FC = () => {
    const [value, setValue] = useState(false);
    const [num, setNum] = useState(0);
    const [obj, setObj] = useState({name: ""});

    const memoObj = useMemo(() => {
        return obj;
    }, [obj.name])

    return (
        <>
            <h1>App</h1>
            <B num={num} obj={memoObj} />
            <button onClick={ () => { setValue(!value) } }>rerender</button>
            <button onClick={ () => { setNum(100) } }>set Num</button>
            <button onClick={ () => { setObj({name: "richard"}) } }>set Obj</button>
        </>
    )
}

export default App;