import { PuzzleInterface } from "./PuzzleInterface";

export function createEmptyPuzzle(): PuzzleInterface {
    return {
        header: "#0: Gib einen Namen ein und starte das Spiel",
        solution: "",
        hints: ["Gib einen Namen ein und starte das Spiel"]
    };
}

export function createPuzzle1(): PuzzleInterface {
    return {
        header: "#1: Sonne, Mond und Sterne...",
        solution: "749",
        hints: ["Findet das Rätsel #1",
            "Irgendwie scheint es schon gelöst zu sein - das ist komisch!",
            "Vielleicht hilft die Lösungsanleitung",
            "Nehmt es auseinander"]
    };
}

export function createPuzzle2(): PuzzleInterface {
    return {
        header: "#2: Unerreichbarer Schlüssel",
        solution: "536",
        hints: ["Habt ihr den ersten Schlüssel auch genutzt?",
            "Es braucht keine Gewalt, sondern Kreativität und Geschick!",
            "Es gibt mehrere Möglichkeiten, z.B. tote Fische schwimmen oben.",
            "Oder: eine Angel, aber ohne Hacken, dafür mit einem anderen Köder!",
            "Wozu sollen denn sonst die Wasserflasche oder die Schnur, der Uhu Patafix und die Magnete sein?"]
    };
}

export function createPuzzle3(): PuzzleInterface {
    return {
        header: "#3: We are the champions, No time for losers",
        prompt: "Quersumme bilden",
        solution: "78",
        hints: ["Das muss man nicht so wissen, aber man muss wissen wo man suchen muss!",
            "Die Gewinner bekommen immer ein Andenken, das ist aber eher deko, als das es Getragen wird!",
            "Wäre ich jetzt schon verheiratet, dann hätte ich einen extra an der Hand!",
            "Die Ringe!!"]
    };
}
export function createPuzzle4(): PuzzleInterface {
    return {
        header: "#4: Kleine Glückskäfer",
        prompt: "aufsteigend",
        solution: "23",
        hints: ["Habt ihr auch alle Dominosteine gefunden?",
            "Es müssen alle Plätze auf dem Blatt ausgefüllt sein.",
            "Sucht in was, was ihr bereits benutzt habt!",
            "Denkt an die Orientierung der Steine! Was könnte eine fehlende Markierung bedeuten?"]
    };
}
export function createPuzzle5(): PuzzleInterface {
    return {
        header: "#5: Augen auf, hindurchgeschaut, fertig!",
        solution: "382",
        hints: ["Weißt Du noch, welche beiden Dominosteine das letzte Rätsel gelöst haben?",
            "Was zeigt euch deren Rückseite?",
            "Wie viele Schlüssellöcher siehst du im Raum?",
            "Hast du durch beide hindurchgeschaut?"]
    };
}
export function createPuzzle6(): PuzzleInterface {
    return {
        header: "#6: Ist es ein Einbruch, wenn man mit dem Schlüssel die Tür öffnet?",
        solution: "139",
        hints: ["Wie bekommst du den Schlüssel, ohne die Türe zu öffnen?",
            "Wozu hast du Spieß und Papier?"]
    };
}
export function createPuzzle7(): PuzzleInterface {
    return {
        header: "#7: 1. Satz Zusatz",
        prompt: "Ich hab ein eigenes Schloss, doch ist das ziemlich klein. Es passt kein Gast, kein Hausgenoss’ zugleich mit mir hinein.",
        solution: "Schlüssel",
        hints: ["Habt ihr die Frage gesehen?",
            "Davon habt ihr heute schon mindestens 2 benutzt!"]
    };
}
export function createPuzzle8(): PuzzleInterface {
    return {
        header: "#8: I'm sending postcards from my heart",
        solution: "613",
        hints: ["Habt ihr 2 Postkarten gefunden, die zusammengehören?",
            "Auf der einen Postkarte haben die Anweisungen genau eine Zahl gemeinsam.",
            "Die Zahl 3 ist gemeinsam (dreifach, gedrittelt, ???, !!!)",
            "Lese nur jedes dritte Wort auf der anderen Postkarte."]
    };
}

export function createPuzzle9(): PuzzleInterface {
    return {
        header: "#9: 1000 miese Tennis-Tricks",
        prompt: "9.0 Ich freue mich, wenn ihr dieses schöne Rätsel ziemlich schnell löst | = 6.2 & 8.11 & 9.1 & 3.1 & ihr & 2.2 & s & 7.10 & 10.6 & Rätsel & 11.4 & schnell & löst |" +
            "9.1 8.3 & 20.5 & n |" +
            "9.2 5.2 & 8.9 & 11.2",
        solution: "1871",
        hints: ["Habt ihr das Buch und den Hinweis auf die Buchseiten gefunden?",
            "Ihr müsst mit Hilfe der entsprechenden Seite dekodieren.",
            "Ihr braucht das Buch 'Tausend miese Tennis-Tricks' von Limpert und da die Seiten 90, 91 und 92. Wie man dekodiert lernt ihr auf Seite 90.",
            "Die erste Zahl gibt die Zeile an, die zweite Zahl das Wort in der Zeile."]
    };
}

export function createPuzzle10(): PuzzleInterface {
    return {
        header: "#10: Spielplatz + Zirkus",
        prompt: "Quersumme: Liebe - Milka - Meer",
        solution: "385",
        hints: ["Findet heraus, was und wo ihr suchen müsst.",
            "Wo ihr suchen müsst erfahrt ihr auf dem Spielplatz und dem Zirkus.",
            "Was ihr suchen müsst, entnehmt ihr aus der Schablone, die ihr noch passend anbringen müsst.",
            "Die Reihenfolge bekommt ihr anhand der zugeordneten Farben.",
            "okay, okay - zählt zuerst alle Tiere, dann alle Kleeblätter, dann alle Bälle. Die Quersumme bildet ihr pro Zählung."]
    };
}
export function createPuzzle11(): PuzzleInterface {
    return {
        header: "#11: Alle Wege führen nach Rom...",
        solution: "7306",
        hints: ["Habt ihr beide Teile des Labyrinths?",
            "Folgt den Pfeilen und lest!",
            "Startet jeweils beim Punkt - im 2. Labyrinth."]
    };
}
export function createPuzzle12(): PuzzleInterface {
    return {
        header: "#12: Seid ihr schon warm?",
        solution: "2501",
        hints: ["Keine Scheu, wärm euch auf und beobachtet was ihr seht.",
            "Aus übungen werden Buchstaben, werden Zahlen.",
            "Habt ihr die richtige Reihenfolge der Übungen beachtet?"]
    };
}
export function createPuzzle13(): PuzzleInterface {
    return {
        header: "#13: Symbolrechnen",
        prompt: "3 Paar Schuhe = 54",
        solution: "2089",
        hints: ["Findet den Wert für jedes einzelne Symbol, dann ist es nur noch Mathe!",
            "Habt ihr Punkt vor Strich beachtet?",
            "Verwendet den Wert für jedes einzelne Symbol, das ihr in der gesuchten Zeile seht!"]
    };
}
export function createPuzzle14(): PuzzleInterface {
    return {
        header: "#14: Suchrätsel",
        prompt: "Queer Beet",
        solution: "3469",
        hints: ["Ihr müsst das Suchrätsel lösen - alle Richtungen und Orientierungen sind möglich!",
            "Streicht alles was ihr im Raum und im Rätsel finden könnt durch, übrig bleibt die Lösungszahl."]
    };
}
export function createPuzzle15(): PuzzleInterface {
    return {
        header: "#15: Grande Finale",
        prompt: "Was hat keine Hände und kann doch schlagen; was hat keine Füße und kann doch gehen?",
        solution: "Uhr",
        hints: ["Habt ihr die Frage gesehen?",
            "Wie spät ist es denn mittlerweile?"]
    };
}
export function createPuzzle16(): PuzzleInterface {
    return {
        header: "Geschafft - Herzlichen Glückwunsch!",
        solution: "",
        hints: []
    };
}