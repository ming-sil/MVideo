import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
