import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) =>{

    let className = "";
    if (!props.filled) {
        className = 'btn btn-outline-info';
    }
    else {
        className = 'btn btn-info';
    }


    return (

        <>

            <Link to = {props.href} onClick = {props.onClick} className = {className}>{props.text}</Link>
        </>

    
    )
}

export default Button