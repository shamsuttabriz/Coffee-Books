import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <div className="h-14">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-246px)] py-4 container mx-auto">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
