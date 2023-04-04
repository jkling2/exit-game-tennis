import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Button, Form } from "react-bootstrap";
import { GameContext } from "../context/GameContext";
import { createEmptyPuzzle, createPuzzle1, createPuzzle10, createPuzzle11, createPuzzle12, createPuzzle13, createPuzzle14, createPuzzle15, createPuzzle16, createPuzzle2, createPuzzle3, createPuzzle4, createPuzzle5, createPuzzle6, createPuzzle7, createPuzzle8, createPuzzle9 } from "./Puzzles";

export interface PuzzleInterface {
    header: string,
    prompt?: string,
    hints: string[],
    solution: string
}

function checkSolution(solution: string, puzzle: PuzzleInterface): boolean {
    return solution === puzzle.solution;
}

const puzzles: { [key: number]: PuzzleInterface; } = {
    0: createEmptyPuzzle(),
    1: createPuzzle1(),
    2: createPuzzle2(),
    3: createPuzzle3(),
    4: createPuzzle4(),
    5: createPuzzle5(),
    6: createPuzzle6(),
    7: createPuzzle7(),
    8: createPuzzle8(),
    9: createPuzzle9(),
    10: createPuzzle10(),
    11: createPuzzle11(),
    12: createPuzzle12(),
    13: createPuzzle13(),
    14: createPuzzle14(),
    15: createPuzzle15(),
    16: createPuzzle16(),
};

export const Puzzle: React.FC = () => {
    const {
        puzzle,
        increasePuzzle
    } = useContext(GameContext);

    const [solution, setSolution] = useState("");
    const [wrongSolution, setWrongSolution] = useState(false);
    const [puzzleToSolve, setPuzzleToSolve] = useState(puzzles[puzzle]);
    const [activeKey, setActiveKey] = useState<string>("");

    useEffect(() => {
        setPuzzleToSolve(puzzles[puzzle]);
        setSolution("");
    }, [puzzle]);

    return (
        <Container>
            <br />
            <Row style={{ textAlign: "left" }}>
                <h3>{puzzleToSolve.header}</h3>
            </Row>
            {puzzleToSolve.solution.length !== 0 && <br />}
            {puzzleToSolve.solution.length !== 0 && <Form onSubmit={e => { e.preventDefault(); }}>
                <Row style={{ textAlign: "left" }}>
                    {puzzleToSolve.prompt ? puzzleToSolve.prompt.split("|").map((text) => <p>{text}</p>) : "Lösung"}
                    <br />
                </Row>
                <Row lg={2}>
                    <Col>
                        <Form.Control
                            type="text"
                            id="solution"
                            placeholder="Gebt Eure Lösung ein"
                            defaultValue={solution}
                            value={solution}
                            onChange={(event: { currentTarget: { value: string } }) => {
                                setSolution(event.currentTarget.value);
                            }}
                        />
                        {wrongSolution && <div>Die Lösung ist falsch!</div>}
                    </Col>
                    <Button
                        variant="dark"
                        onClick={() => {
                            if (checkSolution(solution, puzzleToSolve)) {
                                setWrongSolution(false);
                                setActiveKey("");
                                setTimeout(() => increasePuzzle(), 500);
                            } else {
                                setWrongSolution(true);
                            }
                        }}>Abschicken</Button>
                </Row>
            </Form>}
            <br />
            <Row>
                <Accordion flush activeKey={activeKey} onSelect={eventKey => setActiveKey(eventKey as string)}>
                    {puzzleToSolve.hints.map((hint, index) => {
                        return <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>Hint {index + 1}</Accordion.Header>
                            <Accordion.Body>
                                {hint}
                            </Accordion.Body>
                        </Accordion.Item>
                    })}
                    {puzzleToSolve.solution.length !== 0 &&
                        <Accordion.Item eventKey={puzzleToSolve.solution.toString()}>
                            <Accordion.Header>Solution</Accordion.Header>
                            <Accordion.Body>
                                {puzzleToSolve.solution}
                            </Accordion.Body>
                        </Accordion.Item>}
                </Accordion>
            </Row>
        </Container>
    );

}


