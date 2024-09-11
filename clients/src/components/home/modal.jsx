import React from 'react';

export function Modal({ onSubmit, onClose, eventDetails, onInputChange }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-semibold mb-4">Create a new event</h2>

                <input
                    type="text"
                    value={eventDetails.title}
                    onChange={onInputChange}
                    name="title"
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Event Title"
                />
                <input
                    type="text"
                    value={eventDetails.location}
                    onChange={onInputChange}
                    name="location"
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Location"
                />
                <input
                    type="date"
                    value={eventDetails.date}
                    onChange={onInputChange}
                    name="date"
                    className="border p-2 w-full mb-4 rounded"
                />
                <textarea
                    name="description"
                    value={eventDetails.description}
                    onChange={onInputChange}
                    className="border p-2 w-full mb-4 rounded"
                    placeholder="Event Description"
                />

                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}