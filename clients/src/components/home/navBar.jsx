import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
    <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">EnventLink</h1>
            <div>
                <Link
                    to="/create-event"
                    className="text-white hover:text-gray-200 mx-4"
                >
                    Create Event
                </Link>
                <Link
                    to="/my-events"
                    className="text-white hover:text-gray-200 mx-4"
                >
                    My Events
                </Link>
                <Link
                    to="/explore-events"
                    className="text-white hover:text-gray-200 mx-4"
                >
                    Explore Events
                </Link>
                <button
                    onClick={() => {
                        setUserProfile(null);
                        localStorage.removeItem("username");
                    }}
                    className="bg-blue-700 p-2 rounded hover:bg-blue-800"
                >
                    Log out
                </button>
            </div>
        </div>
    </nav>
    )
}