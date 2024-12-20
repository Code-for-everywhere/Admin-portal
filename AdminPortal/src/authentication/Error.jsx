import  { useEffect } from "react";
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative text-center p-6 bg-white rounded-lg  max-w-4xl w-full">
        {/* Error Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 sm:top-10">
          <img src="backgroundimage/404error.webp" alt="Error" className="w-48 h-auto mx-auto" />
        </div>

        <div className="pt-24">
          {/* 404 Numbers */}
          <div className="animate flex justify-center space-x-6 text-7xl font-bold text-black">
            <p>4</p>
            <p>0</p>
            <p>4</p>
          </div>

          {/* Oops Text */}
          <p className="animate mt-4 text-xl text-black font-medium">
            <span className="block text-4xl text-red-500 mb-2">Oops!</span>
            Page not found.
          </p>

          {/* Refresh Button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="animate px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all"
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
