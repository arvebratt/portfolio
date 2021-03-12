import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";

const GlobalStyle = createGlobalStyle`
html { /* body won't work ¯\_(ツ)_/¯ */
scroll-behavior: smooth;
scroll-snap-type: y proximity;

}
  body {
    margin: 0;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Rajdhani', sans-serif;
  }
`;

const theme = {
  titletext: "#2e3440",
  undertitletext: "#2e3440",
  text: "#5e81ac",
  accent2: "#d8dee9",
  accent3: "#8fbcbb",
  accent4: "#81a1c1",
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
