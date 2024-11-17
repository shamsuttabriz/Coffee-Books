import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <div className="h-14">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-246px)] py-4 container mx-auto px-4">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
