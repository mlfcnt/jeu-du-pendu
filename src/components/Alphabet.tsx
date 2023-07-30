import { Dispatch } from "react";
import { Letter } from "./Letter";
import { words } from "../words";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

type Props = {
  guessedLetters: string[];
  setGuessedLetters: Dispatch<React.SetStateAction<string[]>>;
  lives: number;
  setLives: Dispatch<React.SetStateAction<number>>;
  wordToGuess: (typeof words)[number];
};

export const Alphabet = ({
  guessedLetters,
  setGuessedLetters,
  setLives,
  wordToGuess,
  lives,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {alphabet.split("").map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          type="alphabet"
          hasBeenUsed={guessedLetters.includes(letter)}
          onClick={() => {
            if (!lives) return;
            const isGoodGuess = wordToGuess.includes(letter);
            if (isGoodGuess) {
              setGuessedLetters([...guessedLetters, letter]);
              return;
            } else {
              if (lives > 1) {
                setLives(lives - 1);
                setGuessedLetters([...guessedLetters, letter]);
              } else {
                setLives(lives - 1);
                alert("Vous avez perdu !");
              }
            }
          }}
        />
      ))}
    </div>
  );
};
