import { useState, useEffect } from "react";
import wordsData from "./wordsList.json";

const App = () => {
  const words: string[] = wordsData;

  const [wordToGuess, setWordGuess] = useState<string>("");
  const [guessLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return <div>{wordToGuess}</div>;
};

export default App;
