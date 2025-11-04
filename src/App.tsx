import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import Hacemos from "./pages/Hacemos";
import Posts from "./pages/Posts"

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/nosotros"
          element={<Nosotros />}
        />
        <Route
          path="/hacemos"
          element={<Hacemos />}
        />
        <Route
          path="/post/:slug"
          element={<Posts />}
        />
        <Route
          path="/contacto"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
