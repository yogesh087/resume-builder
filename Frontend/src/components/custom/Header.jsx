import React, { useEffect } from "react";
import logo from "/logo.png";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";

function Header({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("✅ User Found in Header");
    } else {
      console.log("⚠️ User Not Found in Header");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode === 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log("Logout Error:", error.message);
    }
  };

  return (
    <header className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" width={50} height={50} className="rounded-lg" />
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          AI Resume Builder
        </h1>
      </div>

      {/* Navigation Buttons */}
      <nav>
        {user ? (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-gray-500 hover:bg-gray-50 transition"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-500 transition"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button className="bg-blue-600 hover:bg-blue-500 transition">
              Get Started
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
