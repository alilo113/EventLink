import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import 'react-quill/dist/quill.snow.css'; // Import ReactQuill styles
import img from "../../assets/user.png"

export function Home() {
    const [editorValue, setEditorValue] = useState('');

    const handleChange = (value) => {
        setEditorValue(value);
    };

    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean'] // Add this to include the clear formatting button
        ],
    };

    return (
        <div className="flex min-h-screen bg-gray-300">
            {/* Sidebar */}
            <div className="bg-white w-64 h-full fixed top-0 left-0 flex flex-col shadow-lg">
                <div className="p-4 flex flex-col items-center">
                    <img src={img} alt="User" className="w-16 h-16 rounded-full" />
                    <h2 className="text-center mt-2 font-semibold text-gray-700">Username</h2>
                </div>
                <nav className="mt-4 flex flex-col space-y-2">
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Dashboard</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Profile</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Settings</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-200 rounded-lg transition">Logout</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64 p-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <ReactQuill 
                        value={editorValue} 
                        onChange={handleChange} 
                        theme="snow"
                        modules={modules} // Pass the custom toolbar modules here
                    />
                </div>
            </div>
        </div>
    );
}