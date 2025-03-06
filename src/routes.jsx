import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./aboutPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/breeds/:id" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
