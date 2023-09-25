import React, { useState } from 'react';

type BtnProps = {
  currentNum: number;
  onClickHandler: () => void;
}

const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>
        加1，
        <span>
          目前的總數：{currentNum}
        </span>
    </button>
  )
}

const App: React.FC = () => {
  const [num, setNum] = useState(0);

  function btnClickHandler() {
    setNum(num + 1);
  }

  return (
    <>
      <h1>計數器：{num}</h1>
      <Btn currentNum={num} onClickHandler={btnClickHandler} />
    </>
  )
}

export default App;
