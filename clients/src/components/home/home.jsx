import React, { useState } from "react";
import img from "../../assets/user.png";

export function Home({ userProfile }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [eventDate, setEventDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // You can handle form submission here
        console.log({
            title,
            description,
            location,
            eventDate
        });
    }

    return (
        <div className="flex min-h-screen bg-gray-300">
            {/* Sidebar */}
            <div className="bg-white w-64 h-full fixed top-0 left-0 flex flex-col shadow-lg">
                <div className="p-4 flex flex-col items-center">
                    <img src={img} alt="User" className="w-16 h-16 rounded-full" />
                    <h2 className="text-center mt-2 font-semibold text-gray-700">{userProfile}</h2>
                </div>
                <nav className="mt-4 flex flex-col space-y-2">
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Dashboard</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Profile</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Settings</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Logout</a>
                </nav>
            </div>
            {/* Main Content */}
            <form onSubmit={handleSubmit} className="flex-1 ml-64 p-6">
                {/* Event Title */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <label htmlFor="title" className="block text-gray-700 font-semibold">Event Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 mt-2 border rounded"
                        placeholder="Enter event title"
                    />
                </div>
                {/* Event Description */}
                <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                    <label htmlFor="description" className="block text-gray-700 font-semibold">Event Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 mt-2 border rounded"
                        placeholder="Enter event description"
                        rows="6"
                    />
                </div>
                {/* Event Location */}
                <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                    <label htmlFor="location" className="block text-gray-700 font-semibold">Event Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 mt-2 border rounded"
                        placeholder="Enter event location"
                    />
                </div>
                {/* Event Date */}
                <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
                    <label htmlFor="eventDate" className="block text-gray-700 font-semibold">Event Date</label>
                    <input
                        type="date"
                        id="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full p-2 mt-2 border rounded"
                    />
                </div>
                <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-900 mt-3">Submit</button>
            </form>
        </div>
    );
}