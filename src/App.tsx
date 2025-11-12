import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import Hacemos from "./pages/Hacemos";
import Posts from "./pages/Posts";
import Idear from "./pages/Idear";
import Ofrecemos from "./pages/Ofrecemos";
import Multimedia from "./pages/Multimedia";
import Blog from "./pages/Blog";



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
            path="/idear"
            element={<Idear />}
          />
          <Route
            path="/ofrecemos"
            element={<Ofrecemos />}
          />
          <Route
            path="/galeria"
            element={<Multimedia />}
          />
          <Route
            path="/blog"
            element={<Blog />}
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
