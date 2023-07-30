import { words } from "../words";

type Props = {
  wordToGuess: (typeof words)[number];
  guessedLetters: string[];
};

export const useWin = ({ wordToGuess, guessedLetters }: Props) => {
  const hasWon = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  if (hasWon) {
    alert("Vous avez gagné !");
  }
  return null;
};
