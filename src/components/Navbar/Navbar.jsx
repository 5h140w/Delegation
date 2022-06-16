import React , {useEffect , useState} from 'react'
import "./Navbar.css"

const Navbar = () =>{

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset !== 0)
    }
    return (
        <>
            <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
                <section className="navbar_container">
                    <div className="logo_section">
                        <h1>Lena Instruments</h1>
                        <button>
                            <i className="fas fa-bars"></i>             
                        </button>
                    </div>
                    <ul className="menu_navbar">
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