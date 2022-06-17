import React from 'react'
import "./feature.css"

const Feature = () =>{
    const link = "https://media.istockphoto.com/photos/hills-during-sunrise-picture-id524376056?k=20&m=524376056&s=612x612&w=0&h=pVw3gAQ-WrcbgWTsbjsEpf60kUyZTikx81aGuCTuuM8="
    return(
        <section className='feature_container'>
            <div className='left_section'>
                <img src={link} />
            </div>
            <div className='right_section'>
                <span className='title'>A Few Words About The <b>Founders</b></span>
                <span className='subtitle'>
                    We know that good design means good business.
                </span>
                <p>
                    We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </p>
                <p>
                    We care your business and guarantee you to achieve marketing goals.
                </p>
                <button>Learn More</button>
            </div>
        </section>
    )
}

export default Feature