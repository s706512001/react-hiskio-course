import React from 'react';

type ScoreProp = {
    totalScore: number
};
type ScoreState = {};

function getCurrectScore(): number {
    return 100;
}

function getScoreByBoardName(boardName: string): number {
    if (boardName === "boardA") return 200;
    else if (boardName === "boardB") return 1000;
    else return 0;
}

class ScoreBoardA extends React.Component<ScoreProp, ScoreState> {
    render(): React.ReactNode {
        return <p>A Total Score: {this.props.totalScore}</p>
    }
}

class ScoreBoardB extends React.Component<ScoreProp, ScoreState> {
    render(): React.ReactNode {
        return <p>B Total Score: {this.props.totalScore}</p>
    }
}

function withTotalScore(WrappedComponent: React.ComponentType<any>, boardName: string) {
    return class extends React.Component<{}, { totalScore: number }> {
        constructor(props: {}) {
            super(props);
            this.state = {
                totalScore: 0
            };
        }

        componentDidMount(): void {
            this.setState({
                totalScore: getCurrectScore() + getScoreByBoardName(boardName)
            });
        }

        render(): React.ReactNode {
            return <WrappedComponent totalScore={this.state.totalScore} />;
        }
    }
}

function Main() {
    const WrappedComponentA = withTotalScore(ScoreBoardA, 'boardA');
    const WrappedComponentB = withTotalScore(ScoreBoardB, 'boardB');
    return (
        <>
            <WrappedComponentA /> 
            <WrappedComponentB /> 
        </>
    )
}

export default Main;