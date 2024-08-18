import React from "react";
import { Link } from "react-router-dom";
import { ExploreEvents } from "./exploreEvents";
import { NavLink } from "react-router-dom";

export function Home({ userProfile, setUserProfile }) {
    return (
        <>
            {userProfile ? (
                <>
                    <NavLink/>
                    <ExploreEvents />
                </>
            ) : (
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-blue-600 p-4 text-white">
                        <div className="container mx-auto flex justify-between items-center">
                            <h1 className="text-2xl font-bold">EnventLink</h1>
                            <div>
                                <Link
                                    to="/log-in"
                                    className="text-white hover:text-gray-200 mx-2"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/sign-up"
                                    className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <section className="hero bg-blue-500 text-white py-20">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-extrabold mb-4">Welcome to EnventLink</h2>
                            <p className="text-lg mb-8">
                                Your go-to platform for managing and discovering events effortlessly.
                            </p>
                            <Link
                                to="/sign-up"
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </section>

                    <section className="features py-16">
                        <div className="container mx-auto text-center">
                            <h3 className="text-3xl font-bold mb-8">Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="feature bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold mb-4">Manage Events</h4>
                                    <p>Effortlessly create, manage, and track your events in one place.</p>
                                </div>
                                <div className="feature bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold mb-4">Discover Events</h4>
                                    <p>Explore events around you and never miss out on the latest happenings.</p>
                                </div>
                                <div className="feature bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-xl font-semibold mb-4">Custom Alerts</h4>
                                    <p>Set up personalized notifications for your favorite events and topics.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="bg-blue-600 text-white py-4">
                        <div className="container mx-auto text-center">
                            <p>&copy; 2024 EnventLink. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
}