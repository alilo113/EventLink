import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/login"
import { Signup } from "./components/auth/signup"
import { Home } from "./components/home/home"

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
        <Route path="/log-in" element={<Login setUserProfile={setUserProfile}/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App