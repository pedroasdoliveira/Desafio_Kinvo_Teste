import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./assets/styles/theme";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
