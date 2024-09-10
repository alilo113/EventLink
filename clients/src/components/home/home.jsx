import React, { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; // Import ReactQuill styles
import img from "../../assets/user.png";

export function Home({ userProfile }) {
    const [editorValue, setEditorValue] = useState([]);
    const quillRef = useRef(null);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean'] // Add this to include the clear formatting button
        ],
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (quillRef.current) {
            const editor = quillRef.current.getEditor(); // Safely access the editor
            setEditorValue(editor.getContents());
        }
        console.log(editorValue);
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
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <ReactQuill 
                        ref={quillRef} // Assign the ref here
                        value={editorValue} 
                        onChange={setEditorValue} 
                        theme="snow"
                        modules={modules} // Pass the custom toolbar modules here
                    />
                </div>
                <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-900 mt-3">Submit</button>
            </form>
        </div>
    );
}