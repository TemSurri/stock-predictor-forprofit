import React from 'react'

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

            <a href = {props.href} onClick = {props.onClick} className = {className}>{props.text}</a>
        </>

    
    )
}

export default Button