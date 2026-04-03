import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("portfolioTheme") === "dark"
  );

  const currentTheme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("portfolioTheme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <Main theme={currentTheme} toggleTheme={toggleTheme} isDark={isDark} />
      </>
    </ThemeProvider>
  );
}

export default App;
