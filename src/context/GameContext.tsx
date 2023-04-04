import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export const GameContext = React.createContext({
    name: "",
    startTime: 0,
    setTime: 0,
    score: "0000",
    puzzle: 0,
    setName: (name: string) => { },
    setStartTime: (startTime: number) => { },
    increasePuzzle: () => { },
    checkScoreComputer: (time: number) => { }
});

function getInitialValues(
    search: string
): [string, number, number, string, number] {
    const searchParams = new URLSearchParams(search);

    const name: string = searchParams.get("name") || "";
    const startTime: number = parseInt(searchParams.get("startTime") || "0") || 0;
    const setTime: number = parseInt(searchParams.get("setTime") || "0") || 0;
    const score: string = searchParams.get("score") || "0000";
    const puzzle: number = parseInt(searchParams.get("puzzle") || "0") || 0;
    return [
        name,
        startTime,
        setTime,
        score,
        puzzle,
    ];
}

export const GameContextProvider: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const initialValues: [string, number, number, string, number] = (() =>
        getInitialValues(location.search))();

    const [name, setName] = useState<string>(initialValues[0]);
    const [startTime, setStartTime] = useState<number>(initialValues[1]);
    const [setTime, setSetTime] = useState<number>(initialValues[2]);
    const [score, setScore] = useState<string>(initialValues[3]);
    const [puzzle, setPuzzle] = useState<number>(initialValues[4]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        searchParams.set("name", `${name}`);
        searchParams.set("startTime", `${startTime}`);
        searchParams.set("setTime", `${setTime}`);
        searchParams.set("score", `${score}`);
        searchParams.set("puzzle", `${puzzle}`);

        navigate(`?${searchParams.toString()}`);
    }, [name, startTime, setTime, score, puzzle, navigate, location.search]);

    const checkScoreComputer = (time: number) => {
        const firstSet: boolean = setTime === 0;
        const gamesComputer: number = firstSet ? parseInt(score.substring(0, 1)) : parseInt(score.substring(2, 3))
        if (Math.floor(((time - (firstSet ? startTime : setTime)) / 1000 / 60) / 5) !== gamesComputer) {
            const gamesPlayer: number = firstSet ? parseInt(score.substring(1, 2)) : parseInt(score.substring(3));
            var newGamesComputer: number = 0;
            if (gamesPlayer <= 4) {
                newGamesComputer = Math.min(6, gamesComputer + 1);
            } else {
                newGamesComputer = Math.min(7, gamesComputer + 1);
            }
            if (newGamesComputer !== gamesComputer) {
                firstSet ? setScore(newGamesComputer.toString() + score.substring(1)) : setScore(score.substring(0, 2) + newGamesComputer.toString() + score.substring(3));
            }
        }
    }

    const increaseScorePlayer = (scoreSet: string) => {
        if (puzzle === 0) {
            // leave score unchanged
        } else if (puzzle <= 7) {
            if ((parseInt(score.substring(0, 1)) < 6) || (scoreSet === "66") || (scoreSet === "65")) {
                setScore(score.substring(0, 1) + (parseInt(score.substring(1, 2)) + 1).toString() + score.substring(2));
            }
        } else {
            if ((parseInt(score.substring(2, 3)) < 6) || (scoreSet === "66") || (scoreSet === "65")) {
                setScore(score.substring(0, 3) + (parseInt(score.substring(3)) + 1).toString());
            }
        }
    }

    const increasePuzzle = () => {
        const scoreSet: string = setTime === 0 ? score.substring(0, 2) : score.substring(2);
        increaseScorePlayer(scoreSet);
        if ((puzzle <= 5) || ((setTime !== 0) && (puzzle <= 12)) || (puzzle === 15) || (scoreSet === "55") || (scoreSet === "65")) {
            setPuzzle(puzzle + 1);
        } else if ((puzzle === 6) || (puzzle === 7)) {
            setPuzzle(8);
            setSetTime(Date.now())
        } else if ((puzzle === 13) || (puzzle === 14)) {
            if ((parseInt(score.substring(0, 1)) > parseInt(score.substring(1, 2))) || (parseInt(score.substring(2, 3)) > parseInt(score.substring(3)))) {
                setPuzzle(15)
            } else {
                setPuzzle(16)
            }
        }

    }

    return (
        <GameContext.Provider
            value={{
                name: name,
                startTime: startTime,
                setTime: setTime,
                score: score,
                puzzle: puzzle,
                setName: setName,
                setStartTime: setStartTime,
                increasePuzzle: increasePuzzle,
                checkScoreComputer: checkScoreComputer
            }}
        >
            {children}
        </GameContext.Provider>
    );
};