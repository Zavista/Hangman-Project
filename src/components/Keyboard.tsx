import { CSSProperties } from "react";
import styles from "../styles/Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const containerStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
  gap: ".5rem",
};

type KeyboardProps = {
  addGuessedLetters: (key: string) => void;
};

const Keyboard = ({ addGuessedLetters }: KeyboardProps) => {
  return (
    <div style={containerStyle}>
      {KEYS.map((key) => (
        <button
          key={key}
          className={`${styles.btn}`}
          onClick={() => addGuessedLetters(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
