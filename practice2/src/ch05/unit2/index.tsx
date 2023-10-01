import React from "react";
import { BtnProvider, useBtnContext } from "./context/BtnContext"

const D: React.FC = () => {
    const data = useBtnContext();
    console.log(data.btnVisible);
    return <button>D按鈕</button>
}

const C: React.FC = () => {
    return (
        <>
            <p>C 組件</p>
            <D />
        </>
    )
}

const B: React.FC = () => {
    return (
        <>
            <p>B 組件</p>
            <C />
        </>
    )
}

const App: React.FC = () => {
    return (
        <BtnProvider>
            <h1>App</h1>
            <B />
        </BtnProvider>
    )
}

export default App;