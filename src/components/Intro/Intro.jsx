import axios from 'axios'
import React , {useState , useEffect} from 'react'
import "./intro.css"

const Intro = () =>{
    const [data , setData] = useState({})
    const link ="https://flaremetrics.io/api/ftso/provider/metrics?network=songbird&address=0xc9ac8f034d295962a6a975b717b691437605bbb6"
    useEffect(
        ()=>{
            const getInfo = async () =>{
                let res = await axios.get(link)
                console.log(res.data)
                setData(res.data)
            }
            getInfo()
        }, []
    )
    return(
        <div className="intro_container">
            <section className="left_section">
                <h1>Lena Instruments</h1>
                <p>
                    We provide accurate and reliable price feeds to the Flare Network and
                    a transparent, incentivised, risk-free delegation service. We do so by
                    leveraging the distributed nature of the network and its participants.
                    Lena Instruments are an active member of the Flare Network ecosystem.
                </p>
                <div className="info_section">
                    <button>Delegate Your votes</button>
                    <div className="contact">
                        <span className="phone"> Call Us (012) 345 - 6789</span>
                        <span className="contact_text">For any question or concern</span>
                    </div>
                </div>
            </section>
            <section className="right_section">
                <div className="wrapper">
                    <div className="content">
                        <span className="subtitle">Vote Power</span>
                        <span className="value">{Number.parseFloat(data.live_vote_power_percentage).toFixed(2)+" "}%</span> <span className="value">{Number.parseFloat(data.live_vote_power).toFixed(0)+" "} SGB </span>
                    </div>
                    <div className="content">
                        <span className="subtitle">Reward Rate</span>
                        <span className="value">Avg. {data.live_reward_rate} </span> <span className="value">{data.average_reward_rate} </span>
                    </div>
                    <div className="content">
                        <span className="subtitle">Availbility</span>
                        <span className="value">{data.availability}</span> <span className="value">Past 6 hours</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro