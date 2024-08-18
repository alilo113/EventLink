import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

export function ExploreEvents({ userProfile, setUserProfile }) {
    function handleLogOut() {
        setUserProfile(null);
        localStorage.removeItem("username");
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <main className="p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Explore Events</h1>
                    {/* Content to list all events */}
                    <p>Events around you will be displayed here.</p>
                </div>
            </main>
        </div>
    );
}