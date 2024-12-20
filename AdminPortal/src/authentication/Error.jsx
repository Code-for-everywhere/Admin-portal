import React, { useEffect } from "react";
import './Error.css'; // Import the custom CSS for animations

function Error() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    elements.forEach((el, index) => {
      el.classList.add(`animate-in-${index + 1}`);
    });
  }, []);

  const handleSubmit = () => {
    // This will reload the page (refresh)
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative bg-saffron rounded-lg max-w-5xl w-full h-full max-h-5xl p-6">
        <div className="flex items-center justify-center space-x-60">
          {/* 404 Numbers */}
          <div className="flex space-x-6 text-7xl font-bold text-red-600">
            <p className="animate text-4xl">4</p>
            <p className="animate text-4xl">0</p>
            <p className="animate text-4xl">4</p>
          </div>

          {/* Oops Text */}
          <p className="animate text-xl text-gray-700 mt-4 mx-6">Oops! Page not found.</p>

          {/* Refresh Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-yellow text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-opacity-50"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
