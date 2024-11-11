import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="min-h-[calc(100vh-246px)]">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
