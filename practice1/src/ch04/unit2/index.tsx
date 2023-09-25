import React from 'react';
import { useState, useEffect } from 'react';

function getCurrectScore(): number {
    return 100;
}

function getScoreByBoardName(boardName: string): number {
    if (boardName === "boardA") return 200;
    else if (boardName === "boardB") return 1000;
    else return 0;
}

function useGetTotalScore(boardName: string) {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const currentScore = getCurrectScore() + getScoreByBoardName(boardName);
        setScore(currentScore);
    }, []);

    return score;
}

const ScoreBoardA: React.FC = () => {
    const score = useGetTotalScore("boardA");
    return (
        <p>A Total Score: {score}</p>
    )
}

const ScoreBoardB: React.FC = () => {
    const score = useGetTotalScore("boardB");
    return (
        <p>B Total Score: {score}</p>
    )
}

const Main: React.FC = () => {
    return (
        <>
            <ScoreBoardA />
            <ScoreBoardB />
        </>
    )
}

export default Main;