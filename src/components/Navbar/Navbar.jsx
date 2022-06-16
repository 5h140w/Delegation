import React from 'react'
import "./Navbar.css"

const Navbar = () =>{
    return (
        <>
            <nav className="navbar">
                <section className="navbar_container">
                    <div className="logo_section">
                        <h1>Lena Instruments</h1>
                        <button>
                            <i className="fas fa-bars"></i>             
                        </button>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Delegate</li>
                    </ul>
                    <button>Join Now</button>
                </section>
            </nav>
        </>
    )
}

export default Navbar