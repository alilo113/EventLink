import React, { useState } from "react";
import img from "../../assets/user.png";
import { Modal } from "./modal"; // Import Modal component

export function Home({ userProfile }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [event, setEvent] = useState([]);
    const [eventDetails, setEventDetails] = useState({
        title: "",
        location: "",
        date: "",
        description: ""
    });

    // Toggle modal visibility
    function handleClick() {
        setIsModalOpen(true);
    }

    // Handle input change for event details
    function handleInputChange(e) {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value
        });
    }

    // Handle modal close
    function closeModal() {
        setIsModalOpen(false);
    }

    // Submit the event
    async function handleSubmit() {
        try {
            const res = await fetch("http://localhost:3000/", { // Adjust URL as needed
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventDetails) // Pass event details
            });

            const data = await res.json();
            if (res.ok) {
                setEvent([...event, data]);
                console.log(event);
                closeModal(); // Close modal after successful submit
            } else {
                console.error('Failed to submit event:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-300" style={{ marginLeft: "16rem" }}>
            <div className="bg-white w-64 h-full fixed top-0 left-0 flex flex-col shadow-lg">
                <div className="p-4 flex flex-col items-center">
                    <img src={img} alt="User avatar" className="w-16 h-16 rounded-full" />
                    <h2 className="text-center mt-2 font-semibold text-gray-700">{userProfile}</h2>
                </div>
                <nav className="mt-4 flex flex-col space-y-2">
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Dashboard</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Profile</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Settings</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Logout</a>
                </nav>
            </div>
            <div className="p-4">
                <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-900"
                >
                    Create event
                </button>
            </div>
            {isModalOpen && (
                <Modal
                    eventDetails={eventDetails}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}