import React, { createContext, useState, useContext } from 'react';

const defaultValue = {
    btnVisible: false
}

const BtnContext = createContext(defaultValue);

export const BtnProvider: React.FC<any> = ({ children }) => {
    const [btnVisible, setBtnVisible] = useState(false);
    return (
        <>
            <BtnContext.Provider value={{ btnVisible }}>
                { children }
            </BtnContext.Provider>
        </>
    )
}

export const useBtnContext = () => {
    return useContext(BtnContext);
}