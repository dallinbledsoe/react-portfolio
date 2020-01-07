import React from 'react';
import { Link } from 'react-router-dom';
export default function(props) {
            // data that we'll need
        // backg image
        // logo
        // description
        //id

        const { id, description, thumb_image_url, logo} = props.item;
    return (
        <div>

            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>some link</Link>

        </div>
    )
}