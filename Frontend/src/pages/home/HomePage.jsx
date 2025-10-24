/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import Header from "@/components/custom/Header";
import React, { useEffect } from "react";
import heroSnapshot from "@/assets/heroSnapshot.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { startUser } from "../../Services/login.js";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "@/features/user/userFeatures.js";

function HomePage() {
  const user = useSelector((state) => state.editUser.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    window.open("https://github.com/yogesh087", "_blank");
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await startUser();
        if (response.statusCode === 200) {
          dispatch(addUserData(response.data));
        } else {
          dispatch(addUserData(""));
        }
      } catch (error) {
        console.log("Home Page error ->", error.message);
        dispatch(addUserData(""));
      }
    };
    fetchResponse();
  }, [dispatch]);

  const handleGetStartedClick = () => {
    if (user) navigate("/dashboard");
    else navigate("/auth/sign-in");
  };

  return (
    <>
      <Header user={user} />

      {/* HERO SECTION */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-10/12">
            <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Professional Resume
              </span>{" "}
              in Minutes
            </h1>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              Create, refine, and personalize your resume with{" "}
              <span className="font-semibold text-gray-800">
                AI-driven precision.
              </span>
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleGetStartedClick}
                className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586L10.293 4.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleClick}
                className="px-8 py-3 text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-sm"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="w-full mx-auto mt-16 text-center md:w-10/12">
            <div className="relative shadow-2xl rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 bg-gradient-to-r from-blue-500 to-indigo-600 h-10 rounded-t-xl">
                <div className="flex space-x-1.5">
                  <FaCircle className="w-3 h-3 text-white opacity-80 hover:opacity-100 transition" />
                  <FaCircle className="w-3 h-3 text-white opacity-80 hover:opacity-100 transition" />
                  <FaCircle className="w-3 h-3 text-white opacity-80 hover:opacity-100 transition" />
                </div>
                <FaInfoCircle className="text-white opacity-80 hover:opacity-100 transition transform hover:rotate-45" />
              </div>
              <img
                className="object-cover py-2 px-4 rounded-b-xl transition-transform duration-500 hover:scale-[1.02]"
                src={heroSnapshot}
                alt="Dashboard Preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <p className="text-sm text-gray-500">
            &copy; 2025 AI Resume Builder. All rights reserved.
          </p>
          <Button
            variant="outline"
            className="flex items-center gap-2 mt-3 sm:mt-0 border-gray-300 hover:bg-gray-100"
            onClick={handleClick}
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </footer>
    </>
  );
}

export default HomePage;