import { words } from "../words";

export const getRandomWord = (): (typeof words)[number] => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
