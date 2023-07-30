import { words } from "../words";
import { Letter } from "./Letter";

type Props = {
  word: (typeof words)[number];
  guessedLetters: string[];
};

export const DisplayWordToGuess = ({ word, guessedLetters }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {word.split("").map((letter, index) => (
        <Letter
          key={index}
          type="wordToGuess"
          letter={letter}
          shouldBeHidden={!guessedLetters.includes(letter)}
        />
      ))}
    </div>
  );
};
