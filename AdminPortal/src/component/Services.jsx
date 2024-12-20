import React, { useState } from 'react';

function Services() {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [submittedProducts, setSubmittedProducts] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    const handleimageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // Save the current product to submitted products array
        if (title && details && image) {
            const newProduct = { title, details, image };
            setSubmittedProducts([...submittedProducts, newProduct]);

            // Reset input fields
            setTitle('');
            setDetails('');
            setImage('');
        } else {
            alert('Please fill all fields');
        }
    };

    const openPopup = (product) => {
        setPopupData(product);
        setShowPopup(true);  // Show the popup
    };

    const closePopup = () => {
        setShowPopup(false);  // Close the popup
        setPopupData({});
    };

    return (
        <div className="flex items-center justify-center min-h-screen" >
            <div className="max-w-2xl p-6 bg-saffron rounded-lg shadow-md relative z-10">
                {/* Title Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Write Title here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    />
                </div>

                {/* Details Input */}
                <div className="mb-4">
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Write Details here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                        rows="4"
                    />
                </div>

                {/* File Input for Image */}
                <div className="mb-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleimageChange}
                        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-white text-saffron rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* Displaying the Submitted Products */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
                {submittedProducts.map((product, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all" onClick={() => openPopup(product)}>
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                        <h3 className="mt-4 text-xl font-semibold text-saffron">{product.title}</h3>
                    </div>
                ))}
            </div>

            {/* Popup for displaying product details */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-80 transition-opacity duration-1000">
                    <div className="bg-white p-8 rounded-lg w-80 max-w-md transform transition-transform duration-1000">
                        <div className="flex justify-end">
                            <button onClick={closePopup} className="text-yellow-500 font-bold text-3xl hover:text-red-700">&times;</button>
                        </div>
                        <img src={popupData.image} alt={popupData.title} className="w-full h-64 object-cover rounded-md mt-4" />
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500">{popupData.title}</h2>
                        </div>
                        <p className="mt-4">{popupData.details}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={closePopup} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;
