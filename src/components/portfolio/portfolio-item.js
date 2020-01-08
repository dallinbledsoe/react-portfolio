import React from 'react';
import { Link } from 'react-router-dom';
export default function(props) {
            // data that we'll need
        // backg image
        // logo
        // description
        //id

        const { id, description, thumb_image_url, logo_url} = props.item;
    return (
        <div className="portfolio-item-wrapper">
            <div
            className="portfolio-img-background"
            style={{
                backgroundImage: "url(" + thumb_image_url + ")" 
            }}
            />

            <div className="img-text-wrapper">
                <div className="logo-wrapper">
            <img src={logo_url} />
            </div>
            <div className="subtitle">{description}</div>
            <Link to={`/portfolio/${id}`}>some link</Link>
            </div>
        </div>
    )
}