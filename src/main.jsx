import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./Header"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function App() {
  return (
    <div className="container">
      <div className="business-card">
        <Header />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);