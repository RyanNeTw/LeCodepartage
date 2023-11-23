import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/about";
import AuthorPage from "./pages/author";
import Error404 from "./pages/error";
import MainPage from "./pages/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/auteur/:name" element={<AuthorPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
