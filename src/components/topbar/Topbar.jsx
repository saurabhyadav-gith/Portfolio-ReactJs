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
                        <a href = "https://mail.google.com/mail/u/1/#inbox?compose=CllgCJTJndBrlkcLjWmQHrmZzCVvRxmmmJmbjBzNSLBTdJfJDjzzTgQLTFhmNWQvhjnMRnxgLKL" ><span>saurabhyadav970@gmail.com</span></a>
                        <AttachFileIcon className="icon" />
                        <a href="https://drive.google.com/file/d/1lqyV35oPbb9_CSK3Psju0catU-XwRfYE/view?usp=sharing"><span>My Resume</span></a>
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
