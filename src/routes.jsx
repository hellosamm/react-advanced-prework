import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./aboutPage";
import Footer from "./Footer";
import Header from "./Header";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/breeds/:id" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
