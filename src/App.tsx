import { useState, useEffect, useCallback } from "react";
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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const incorrectLetters: string[] = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetters = useCallback(
    (key: string): void => {
      if (guessedLetters.includes(key)) return;
      setGuessedLetters((guessedLetters) => [...guessedLetters, key]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={textStyle}>{wordToGuess}</div>
      <HangmanDrawing
        numberOfGuesses={incorrectLetters.length}
      ></HangmanDrawing>
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      ></HangmanWord>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard addGuessedLetters={addGuessedLetters}></Keyboard>
      </div>
    </div>
  );
};

export default App;
