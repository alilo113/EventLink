import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/home/home"
import { Login } from "./components/auth/login"
import { Signup } from "./components/auth/signup"
import { CreateEvent } from "./components/home/createEvent"
import { MyEvents } from "./components/home/myEvents"
import { ExploreEvents } from "./components/home/exploreEvents"

function App() {
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const storedUserProfile = localStorage.getItem("username")
    setUserProfile(storedUserProfile)
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userProfile={userProfile} setUserProfile={setUserProfile}/>}/>
        <Route path="/create-event" element={<CreateEvent/>}/>
        <Route path="/my-events" element={<MyEvents/>}/>
        <Route path="/explore-events" element={<ExploreEvents/>}/>
        <Route path="/log-in" element={<Login setUserProfile={setUserProfile}/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App