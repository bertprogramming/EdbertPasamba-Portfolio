import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) =>
      theme.isDark
        ? "linear-gradient(160deg, #0f0c29 0%, #302b63 55%, #1a1a2e 100%)"
        : theme.body};
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }
`;
