import React , {useEffect , useState} from 'react'
import "./Navbar.css"

const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset !== 0)
    }
    const handleClick = () =>{
        setisOpen(!isOpen)
    }

    return (
        <>
            <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
                <section className="navbar_container">
                    <div className="logo_section">
                        <h1>Lena Instruments</h1>
                        <button onClick ={handleClick}>
                            <i className="fas fa-bars"></i>             
                        </button>
                    </div>
                    <ul className={isOpen ? "menu_navbar" : "none"}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Delegate</li>
                    </ul>
                    <button className={isOpen ? "" : "none"}>Join Now</button>
                </section>
            </nav>
        </>
    )
}

export default Navbar