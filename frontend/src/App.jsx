import React, { useEffect } from "react"
import Hero from "./components/hero"
import CLOUDS from "vanta/dist/vanta.clouds.min"

import VerticalNavbar from "./components/NavBar"

function App() {
  useEffect(() => {
    CLOUDS({
      el: "#vanta",
      speed: 0.5
    })
  }, [])

  return (
    <div className="app m-0 p-0">
      <div className="bg h-screen w-screen" id="vanta">
        <Hero />
        <VerticalNavbar />
      </div>


    </div>
  )
}

export default App
