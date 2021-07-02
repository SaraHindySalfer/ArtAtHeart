import React from 'react'
import './Footer.css'

//based on: https://bootsnipp.com/snippets/84kpo


export default function Footer() {
    return (
        <div className='text-center center-block' >
            <br />
            <p className='contact'>contact us</p>
            
            <br />
            <a className='footerLink' href="https://www.facebook.com/ArtAtHeart" target='_blank'><i id="social-fb" className="fa fa-facebook-square fa-lg social"></i></a>
            <a className='footerLink' href="https://twitter.com/ArtAtHeart" target='_blank'><i id="social-tw" className="fa fa-twitter-square fa-lg social"></i></a>
            <a className='footerLink' href="https://plus.google.com/+ArtAtHeart" target='_blank'><i id="social-gp" className="fa fa-google-plus-square fa-lg social"></i></a>
            <a className='footerLink' href="mailto:Art.At.Heart.pro@gmail.com" target='_blank'><i id="social-em" className="fa fa-envelope-square fa-lg social"></i></a>
            <br />
        </div>

    )
}
