import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, title, caption, heroclass}) {
    return (
        <BackgroundImage
        fluid={img}
        className = {heroclass}
        >
        {/* <img src = "https://i.imgur.com/tR1sn1Y.jpg" alt = "profile image" /> */}
        <h4 className="text-black text-upper display-3 text-center"><strong>{title}</strong></h4>
        <h5 className="text-dark disable">{caption}</h5>
        </BackgroundImage>     
    )
}
