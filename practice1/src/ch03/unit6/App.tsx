import React from 'react';
import styled from 'styled-components';

type BtnType = {
    status: boolean
}

const Button = styled.button<BtnType>(props => ({
    background: 'transparent',
    borderRadius: '3px',
    border: '2px solid #BF4F74',
    color: props.status === false ? "#000000" : "#BF4F74",
    margin: '0 1em',
    padding: '0.25em 1em'
}))

const H1 = styled.h1`
    color: 'blue'
`;

// const AppStyle1 = {
//     color: 'blue'
// }

// const AppStyle2 = {
//     color: 'red'
// }

const App: React.FC = () => {
    return (
        <>
            <H1>Hello</H1>
            <Button status={false}>
                BTN
            </Button>
        </>
    )
}

export default App;