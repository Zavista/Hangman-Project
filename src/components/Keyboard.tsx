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
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
};

const Keyboard = ({
  addGuessedLetters,
  activeLetters,
  inactiveLetters,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div style={containerStyle}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetters(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
