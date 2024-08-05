import { useState, useEffect } from "react";
import wordsData from "./wordsList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const textStyle: React.CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
};

const App = () => {
  const words: string[] = wordsData;

  const [wordToGuess, setWordGuess] = useState<string>("");
  const [guessLetters, setGuessedLetters] = useState<string[]>(["g", "t", "o"]);

  const incorrectLetters: string[] = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  useEffect(() => {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={textStyle}>{wordToGuess}</div>
      <HangmanDrawing
        numberOfGuesses={incorrectLetters.length}
      ></HangmanDrawing>
      <HangmanWord wordToGuess={wordToGuess}></HangmanWord>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard></Keyboard>
      </div>
    </div>
  );
};

export default App;
