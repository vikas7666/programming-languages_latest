import { useState } from "react";
import Cards from "./001_Style_Task";
import CSSModuleCSS from "./002_CSSModule";

function StyletRoot() {
  const [textColor, setTextColor] = useState("red");
  const [grid, setGrid] = useState(true);

  const [cardStyle, setCardStyle] = useState({
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "25%",
    padding: "10px",
    backgroundColor: "white",
    margin: "5px",
  });

  const updateTheme = (bgColor, txtColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(txtColor);
  };

  return (
    <>
      <button onClick={() => updateTheme("green", "red")}>Green + Red</button>
      <button onClick={() => updateTheme("black", "yellow")}>Default Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div
        style={{
          display: grid ? "flex" : "block",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* ✅ Pass props here */}
        <Cards cardStyle={cardStyle} textColor={textColor} />
        <Cards cardStyle={cardStyle} textColor={textColor} />
        <Cards cardStyle={cardStyle} textColor={textColor} />
      </div>

      <h2>----------------- 002 CSS Module Css------------------------</h2>
      <CSSModuleCSS />
    </>
  );
}

export default StyletRoot;
