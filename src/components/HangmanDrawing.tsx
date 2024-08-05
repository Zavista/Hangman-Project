import { CSSProperties } from "react";

// Define the CSS properties as constants
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

const HangmanDrawing: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={verticalPoleStyle}></div>
      <div style={horizontalPoleStyle}></div>
      <div style={mainPoleStyle}></div>
      <div style={baseStyle}></div>
    </div>
  );
};

export default HangmanDrawing;
