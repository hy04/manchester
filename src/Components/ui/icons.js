import React from 'react';
import { Link } from 'react-router-dom';
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo=(props)=>{
    //this is just a static logo
    const template= 
    <div 
        className="img_cover"
        style={{
            width:props.width,
            height:props.height,
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>
    //if the link is true(clickable)
    if(props.link){
        return(
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    }else{
        return template
    }
}