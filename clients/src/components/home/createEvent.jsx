import React from "react";
import { Link } from "react-router-dom";

export function CreateEvent({ userProfile, setUserProfile }) {
    function handleLogOut() {
        setUserProfile(null);
        localStorage.removeItem("username");
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Create a New Event</h1>
                    <form action="/add-event" method="POST">
                        <div className="mb-4">
                            <label htmlFor="eventTitle" className="block text-sm font-semibold mb-2">
                                Event Title
                            </label>
                            <input
                                type="text"
                                id="eventTitle"
                                name="eventTitle"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventLocation" className="block text-sm font-semibold mb-2">
                                Event Location
                            </label>
                            <input
                                type="text"
                                id="eventLocation"
                                name="eventLocation"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventDate" className="block text-sm font-semibold mb-2">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventDescription" className="block text-sm font-semibold mb-2">
                                Event Description
                            </label>
                            <textarea
                                id="eventDescription"
                                name="eventDescription"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 p-3 text-white rounded hover:bg-blue-700"
                        >
                            Add Event
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}