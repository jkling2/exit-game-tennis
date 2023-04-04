import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GameContext } from '../context/GameContext';
import { Puzzle } from '../puzzles/PuzzleInterface';
import Confetti from 'react-confetti';

const Game: React.FC = () => {
    const {
        name,
        startTime,
        score,
        puzzle,
        checkScoreComputer,
    } = useContext(GameContext);

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        if (startTime !== 0 && puzzle !== 16) {
            var timer = setInterval(() => {
                const date = new Date();
                setDate(date);
                checkScoreComputer(date.valueOf());
            }, 1000)
            return function cleanup() {
                clearInterval(timer);
            }
        }
    });

    const formatTime = (milliseconds: number) => {
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
        const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

        return [
            hours.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0")
        ].join(":");
    }

    return (
        <Container>
            <br />
            {puzzle === 16 && (<Confetti />)}
            <Row>
                <Col>
                    <Row lg={1}><h4>Score-Board</h4></Row>
                    <Row lg={3}><Col style={{ textAlign: "right" }}><h2>{score.substring(0, 1)}</h2></Col><Col><h2>Set1</h2></Col><Col style={{ textAlign: "left" }}><h2>{score.substring(1, 2)}</h2></Col></Row>
                    <Row lg={3}><Col style={{ textAlign: "right" }}><h2>{score.substring(2, 3)}</h2></Col><Col><h2>Set2</h2></Col><Col style={{ textAlign: "left" }}><h2>{score.substring(3)}</h2></Col></Row>
                    <Row lg={3}><Col style={{ textAlign: "right" }}><h2>{"Andrea"}</h2></Col><Col><h2>V</h2></Col><Col style={{ textAlign: "left" }}><h2>{name}</h2></Col></Row>
                    <br />
                    {startTime !== 0 && <Row lg={1}><h4>Total time passed: {formatTime(date.valueOf() - startTime)}</h4></Row>}
                </Col>
                <Col>
                    <Puzzle />
                </Col>
            </Row>
        </Container>
    );
};

export default Game;