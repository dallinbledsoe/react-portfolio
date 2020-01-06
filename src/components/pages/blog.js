import React from "react";
import { Link } from "react-router-dom"

export default function() {
    return(
        <div>
            Blog
            <Link to="/about-me">Read more about myself</Link>
        </div>
    )
}