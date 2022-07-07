import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home/Home";
import { Liked } from "./components/pages/home/liked/Liked";
import { Movies } from "./components/pages/home/movies/Movies";
import { TvPrograms } from "./components/pages/home/tvPrograms/TvPrograms";
import { NotFound } from "./components/pages/NotFound";
import { Search } from "./components/pages/search/Search";
import { GlobalStyled } from "./styles/GlobalStyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvprograms" element={<TvPrograms />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
