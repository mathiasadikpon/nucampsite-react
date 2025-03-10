import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";

import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="about" element={<AboutPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
