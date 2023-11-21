import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/about";
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
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
