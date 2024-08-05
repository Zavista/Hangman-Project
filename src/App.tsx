import { useState, useEffect } from "react";
import wordsData from "./wordsList.json";

const App = () => {
  const words: string[] = wordsData;

  const [wordToGuess, setWordGuess] = useState<string>("");
  const [guessLetters, setGuessedLetters] = useState<string[]>([]);

  const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "lightblue",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "2rem",
    textAlign: "center",
  };

  useEffect(() => {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={textStyle}>{wordToGuess}</div>
    </div>
  );
};

export default App;
