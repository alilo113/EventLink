import React from "react";
import { Link } from "react-router-dom";

export function MyEvents({ userProfile, setUserProfile }) {
    function handleLogOut() {
        setUserProfile(null);
        localStorage.removeItem("username");
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">My Events</h1>
                    {/* Content to list user's events */}
                    <p>Your events will be listed here.</p>
                </div>
            </main>
        </div>
    );
}