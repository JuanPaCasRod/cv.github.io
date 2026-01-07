import NotFound from "./src/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./src/components/ErrorBoundary";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import Home from "./src/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
