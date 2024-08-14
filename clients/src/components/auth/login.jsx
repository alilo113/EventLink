import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login({setUserProfile}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const nav = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/log-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            })
            
            const data = await res.json()
            if(res.ok){
                localStorage.setItem("username", data.username)
                localStorage.setItem("token", data.token)
                localStorage.setItem("userID", data._id)
                
                setUserProfile(data.username);
                setEmail("")
                setPassword("")
                nav("/")
            }else{
                setError(data.message)
            }
        } catch (error) {
            console.log(`Log in error: ${error}`)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Log In</h2>
                {error ? (
                    <div className="bg-red-800 text-white p-3 mb-3">{error}</div>
                ): (
                    null
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-indigo-600 hover:text-indigo-700">Sign up</a>
                </p>
            </div>
        </div>
    );
}