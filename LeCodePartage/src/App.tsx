import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/about";
import AuthorPage from "./pages/author";
import Cgu from "./pages/cgu";
import ContactPage from "./pages/contact";
import Error404 from "./pages/error";
import LegalNotice from "./pages/legalNotice";
import MainPage from "./pages/main";
import Privacy from "./pages/privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/auteur/:name" element={<AuthorPage />} />
          <Route path="/contacte" element={<ContactPage />} />
          <Route path="/mentions-légales" element={<LegalNotice />} />
          <Route path="/confidentialité" element={<Privacy />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
