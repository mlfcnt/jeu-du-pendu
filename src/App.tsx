import { ReactNode, useState } from "react";
import "./App.css";
import { Alphabet } from "./components/Alphabet";
import { DisplayWordToGuess } from "./components/DisplayWordToGuess";
import { getRandomWord } from "./helpers/getRandomWord";
import { useWin } from "./hooks/useWin";

const wordToGuess = getRandomWord();

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(7);

  useWin({ guessedLetters, wordToGuess });
  return (
    <>
      <Container>
        <h1>Jeu du pendu</h1>
        <p>Nombre de vies : {lives}</p>
        <DisplayWordToGuess
          word={wordToGuess}
          guessedLetters={guessedLetters}
        />
        <div
          style={{
            marginBottom: "200px",
          }}
        />
        <Alphabet
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          setLives={setLives}
          wordToGuess={wordToGuess}
          lives={lives}
        />
      </Container>
    </>
  );
}

export default App;

const Container = ({ children }: { children: ReactNode }) => {
  return <div style={{ maxWidth: "80%", margin: "auto" }}>{children}</div>;
};
