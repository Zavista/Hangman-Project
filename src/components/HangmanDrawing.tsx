import { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  position: "relative",
};

const verticalPoleStyle: CSSProperties = {
  height: "50px",
  width: "10px",
  background: "black",
  position: "absolute",
  top: 0,
  right: 0,
};

const horizontalPoleStyle: CSSProperties = {
  height: "10px",
  width: "200px",
  background: "black",
  marginLeft: "120px",
};

const mainPoleStyle: CSSProperties = {
  height: "400px",
  width: "10px",
  background: "black",
  marginLeft: "120px",
};

const baseStyle: CSSProperties = {
  height: "10px",
  width: "250px",
  background: "black",
};

const HEAD: JSX.Element = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY: JSX.Element = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const RIGHT_ARM: JSX.Element = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM: JSX.Element = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={containerStyle}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={verticalPoleStyle}></div>
      <div style={horizontalPoleStyle}></div>
      <div style={mainPoleStyle}></div>
      <div style={baseStyle}></div>
    </div>
  );
};

export default HangmanDrawing;
