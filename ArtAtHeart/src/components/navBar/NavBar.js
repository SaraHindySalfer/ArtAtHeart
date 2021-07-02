import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/img/logo/logo.jpg'
export default function NavBar(props) {
    let left = 'left'
    let user = sessionStorage.getItem("loggedIn")
    const onClick = () => {
        sessionStorage.removeItem("loggedIn")
        window.location.reload();
    }
    return (
        <div className="topnav">
            <div className='leftSide'>
                <img src={logo} className='logo' alt='' />
                <a className="active" className='link' href="/">Home</a>
                <ul>
                    <li class='dropDown' style={{ float: left }}>
                        <a href='javascript:void(0)' className='artists' className='link'>Artists</a>
                        <div className='allArtists'>
                            <a className='link' href='Van Gogh'>Van Gogh</a>
                            <a className='link' href='Pablo Picasso'>Pablo Picasso</a>
                            <a className='link' href='Robert Loft'>Robert loft</a>
                            <a className='link' href='Daniel Sader'>Daniel Sader</a>
                            <a className='link' href='All Artists'>All Artists</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li class='dropDown' style={{ float: left }}>
                        <a href='javascript:void(0)' className='artworks' className='link'>Artworks</a>
                        <div className='artTypes'>

                            <a className='link' href='abstractArt'>Abstract art</a>
                            <a className='link' href='modernArt'>Modern art</a>
                            <a className='link' href='drawings'>Drawings</a>
                            <a className='link' href='TangibleArt'>Tangible Art</a>
                            <a className='link' href='Photography'>Photography</a>
                            <a className='link' href='paintings'>Paintings</a>
                        </div>
                    </li>
                </ul>
                <a className='link' href="gallery">Gallery</a>
            </div>
            <div className='rightSide'>
                {user != null &&
                    <a className='OtherLink' onClick={onClick}>Hi {user}! click to exit</a>
                }
                <a className='link' href="about">About</a>
                <a className='link' href="sell">Sell</a>
                <a className='link' href='signUp'>Sign Up</a>
                <a className='link' href="login">Login</a>
                <div className="search-container">

                </div>

            </div>
        </div>
    );
}
