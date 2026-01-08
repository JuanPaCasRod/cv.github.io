import { ThemeProvider } from "./src/contexts/ThemeContext";
import Home from "./src/pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
    </ThemeProvider>
  );
}

export default App;
