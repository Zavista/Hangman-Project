import { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  display: "flex",
  gap: ".25em",
  fontSize: "6rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "monospace",
};

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

const HangmanWord = ({ wordToGuess, guessedLetters }: HangmanWordProps) => {
  return (
    <div style={containerStyle}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
