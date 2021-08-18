import React from 'react'
import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
// import "../../../public/assets"
export default function Intro() {
    // useRef is a hook
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { backDelay: 1000 ,showCursor: true, strings: ['Competitive Programming', 'Web Development', 'Mobile Development']});
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                {/* <div className="imgContainer">
                    <img src = "assets/SaurabhYadav.png" alt =""></img>
                </div> */}
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Saurabh Yadav</h1>
                    <h3>Enthusiastic about <span ref = {textRef}></span></h3>
                    <a href="#portfolio">
                    <ExpandMoreIcon className = "icon" fontSize = "large"/>
                </a>
                </div>
                
            </div>
        </div>
    )
}
