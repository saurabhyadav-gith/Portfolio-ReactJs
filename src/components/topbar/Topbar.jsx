import React from 'react'
import "./topbar.scss"
import { Mail } from "@material-ui/icons"
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">
                        Saurabh Yadav.
                    </a>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>saurabhyadav970@gmail.com</span>
                        <AttachFileIcon className="icon" />
                        <a href=""><span>My Resume</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick = {()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
