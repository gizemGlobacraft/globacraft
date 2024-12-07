import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import Home from "./pages/Home";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminLoginPage from "./pages/AdminLoginPage";
import BlogAdminPage from "./pages/BlogAdminPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import KVKKPage from "./pages/KVKKPage";
import TermsPage from "./pages/TermsPage";
function App() {
  return (
    <div className="font-sans bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/cozumler" element={<SolutionsPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/kvkk" element={<KVKKPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route
            path="/admin/blog"
            element={
              <PrivateRoute>
                <BlogAdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
