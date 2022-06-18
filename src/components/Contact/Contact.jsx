import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from "emailjs-com"
import Map from "../../img/map.png"
import Phone from "../../img/phone.png"
import Send from "../../img/send.png"

const service = process.env.REACT_APP_SERVICE
const template = process.env.REACT_APP_TEMPLATE
const publicKey = process.env.REACT_APP_PUBLIC_KEY

const Contact = () =>{
    const formRef = useRef()
    const [isSent , setisSent] = useState(false)
    const sentNotification = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            service,
            template,
            formRef.current,
            publicKey
        ).then(
            (res)=>{
                console.log("Done" + res.text)
                setisSent(true)
            } , 
            (err)=>{
                console.log(err.text)
            }
        )
    }
    return(
        <div className='contact_container'>
            <h1 className='contact_title'>Questions? <br/> Let's Get In Touch</h1>
            <section className='wrapper'>
                <div className='form_container'>
                    <form className='form' ref={formRef} onSubmit={sentNotification}>
                        <div className='left_form'>
                            <input placeholder='Your name' name="name" required={true}/>
                            <input placeholder='Your Email' name="email" required={true}/>
                            <input placeholder='Subject' name="subject" required={true}/>
                        </div>
                        <div className='right_form'>
                            <textarea placeholder='Your message' name="message" required={true} minLength={15}/>
                            {isSent ? <p className='message'>Thank You!</p> : <button className='btn'>Send</button>}
                        </div>
                    </form>
                </div>
                <div className='address_container'>
                    <div className='address_item'>
                        <img src={Map}/>
                        <span>123 Park Avenue St., Suise, Suisse</span>
                    </div>
                    <div className='address_item'>
                        <img src={Phone}/>
                        <span>+1 000 0000 0000</span>
                        <span>+1 000 0000 0000</span>
                    </div>
                    <div className='address_item'>
                        <img src={Send}/>
                        <span>contact@lena.tech</span>
                        <span>sales@lena.tech</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact