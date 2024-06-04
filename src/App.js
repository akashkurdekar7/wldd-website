import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    color: {
      primary: "#fdd300",
      secondary: "#f6cd31",
      background: "#12141C",
      white: "#eeeeff",
      black: "#000000",
      text: "#2c3e50",
    },
    font: {
      small: "12px",
      medium: "16px",
      large: "20px",
      xlarge: "24px",
    },
    fontfamily: {},
    weights: {
      normal: 400,
      bold: 700,
    },
    media: {
      tab: "790px",
      mobile: "390px",
      window: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
