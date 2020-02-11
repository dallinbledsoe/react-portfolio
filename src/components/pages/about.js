import React from 'react';
import profilePicture from "../../../static/assets/images/auth/IMG_1839.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            </div>
        <div className="right-column">
        Front-End focused Developer with Full-Stack capabilities who is looking to apply my entrepreneurial drive and programming knowledge into gaining more skills, and helping others. 

        I am 21 years old, living in Orem, Utah. I recently graduated from Bottega Tech, an accredited coding school in Lehi where I learned full-stack development. 

        My favorite way to code is using Javascript and more specifically the React library.

        </div>
        </div>
    )
}