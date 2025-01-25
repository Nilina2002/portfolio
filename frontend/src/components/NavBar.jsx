import React from "react";

const FullPage = () => {
    return (
        <div className="flex h-screen">
            {/* Vertical Navbar */}
            <div className="flex flex-col w-64 bg-gray-800 text-white p-4">
                <a href="#home" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Home
                </a>
                <a href="#about" className="py-2 px-4 hover:bg-gray-700 rounded">
                    About
                </a>
                <a href="#services" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Services
                </a>
                <a href="#contact" className="py-2 px-4 hover:bg-gray-700 rounded">
                    Contact
                </a>
            </div>

            {/* Hero Section */}
            <div className="flex-grow bg-gray-100 p-8">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg text-gray-600 text-center max-w-2xl">
                        Discover our amazing services and solutions. Navigate through the menu
                        to learn more about what we offer.
                    </p>
                    <a
                        href="#services"
                        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FullPage;
