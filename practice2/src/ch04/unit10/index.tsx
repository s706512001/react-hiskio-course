import React, { useState, useEffect, useRef, FormEvent } from "react";

const App: React.FC = () => {
    const [accountVal, setAccountVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");

    function login() {
        // const account = document.getElementById('account') as HTMLInputElement;
        // const password = document.getElementById('password') as HTMLInputElement;
        console.log(accountVal);
        console.log(passwordVal);
    }

    function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setAccountVal(event.currentTarget.value);
        }
    }

    function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setPasswordVal(event.currentTarget.value);
        }
    }

    return (
        <>
            <h1>Form</h1>
            <p>帳號</p>
            <input type="text" name="" value={accountVal} id="account" onChange={onChangeHandler} />
            <p>你輸入的帳號：{accountVal}</p>
            <p>密碼</p>
            <input type="password" name="" value={passwordVal} id="password" onChange={onChangePasswordHandler} />
            <div>
                <button onClick={login}>登入</button>
            </div>
        </>
    )
}

export default App;