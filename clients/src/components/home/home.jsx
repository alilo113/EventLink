import React from "react";
import img from "../../assets/pexels-joshsorenson-976866.jpg";
import { Link } from "react-router-dom"

export function Home() {
    return (
        <main
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-white text-4xl font-bold mb-4">
                    Welcome to
                </h1>
                <p className="text-white text-lg mb-6">
                    EventLink, your go-to platform for connecting with like-minded individuals
                </p>
                <Link to="/sign-up" className="bg-white text-black py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Get Started
                </Link>
                <Link  to="/log-in" className="text-white mt-3 hover:underline">I already have an account</Link>
            </div>
        </main>
    );
}