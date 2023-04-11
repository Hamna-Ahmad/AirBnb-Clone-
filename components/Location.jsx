import React from 'react'
import '/App.css'

export default function Location(props){
    return (
        <div>
            <div className="location">
                <img className="location-img" src={props.location.imageUrl} width="124px" height="168px"/>
                <div className="info">
                    <div className="location-info">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{props.location.location}</p>
                        <a href={props.location.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.location.title}</h1>
                    <h4>{props.location.startDate} - {props.location.endDate}</h4>
                    <p>{props.location.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}