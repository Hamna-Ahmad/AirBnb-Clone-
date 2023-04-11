import React from 'react'
import logo from '/src/logo.png'
import '/App.css'

export default function Header(){
    return (
        <header>
            <img className="logo" src={logo}/>
            <h2> my travel journal.</h2>
        </header>
    )
}
console.log(logo)