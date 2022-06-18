import React from 'react'
import "./footer.css"

const Footer = () =>{
    return(
        <div className='footer_container'>
            <div className='footer_wrapper'>
                <ul className='footer_menu'>
                    <li>Guide</li>
                    <li>Support</li>
                    <li>API</li>
                    <li>Community</li>
                </ul>
                <span className='footer_copyright'>Lena Instruments Ⓒ</span>
            </div>
        </div>
    )
}

export default Footer