import React, { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { GameContext } from '../context/GameContext';

const Rules: React.FC = () => {
    const {
        startTime,
        puzzle,
        name,
        setStartTime,
        increasePuzzle,
        setName,
    } = useContext(GameContext);

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container>
            <h1>Hallo Jasmin, hallo Freunde von Jasmin,</h1>
            <p>Schafft ihr es rechtzeitig die Tennissachen zu finden und zu befreien, dann freue ich mich auf ein spannendes Tennisspiel - ansonsten wird es ein leichtes und vielleicht auch unfaires Spiel. Aber was tut man nicht alles für einen Sieg.
                Wenn ihr auf Start drückt, dann fängt der Timer an zu laufen. Ihr habt eine Stunde, um die Tennissachen zu befreien! Wie viel Zeit verstrichen ist, seht ihr am Spielstand: Alle 5 Minuten gewinnt euer Gegner ein Spiel - d.h. nach spätestens 30 Minuten hat euer Gegner den ersten Satz gewonnen, wenn ihr nicht schneller die ersten 6 Rätsel gelöst habt. Dann beginnt Satz 2. Habt ihr in einem Satz beide 5 Spiele gewonnen, dann geht der Satz bis 7. Ihr müsst also ein extra Rätsel lösen, habt dafür aber auch 5 Minuten extra Zeit "gewonnen".
            </p>
            <p>Ihr dürft alles was ihr im Raum findet, an Hilfsmittel verwenden. Bitte macht dabei aber nichts kapput! Ihr dürft sogar das Internet fragen, aber ob euch das wirklich schneller macht?!
                Was euch auch NICHT erlaubt ist, sich den Quellcode anzuschauen. Da ist nämlich die Lösung fest kodiert (geht bei einer statischen Webseite nicht anders!) - aber des wäre ja noch unfairer, als seinen Gegner durch ein kleines Spielchen vor dem Match aufzuhalten, oder?
            </p>
            <p>Also - Ready? Play!
            </p>
            <h2>Eure Andrea</h2>
            <br />
            <div style={{ borderTop: "2px solid #000 ", marginLeft: 20, marginRight: 20 }} />
            <br />
            <Form onSubmit={e => { e.preventDefault(); }}>
                <Row lg={4}>
                    <Col></Col>
                    <Col>
                        <Form.Label htmlFor="name">Spieler-Name</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="Gebt Euren Namen ein"
                            value={name}
                            onChange={(event: { currentTarget: { value: string } }) => {
                                setName(event.currentTarget.value);
                            }}
                        /></Col><Col></Col></Row>
                <br />
                <Button
                    variant="dark"
                    disabled={(startTime > 0 && puzzle > 0)}
                    onClick={() => {
                        increasePuzzle();
                        setStartTime(Date.now());
                        navigate("/game" + location.search);
                    }}>Start</Button>
            </Form>
        </Container>
    );
};

export default Rules;