import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './style/banner.scss'

const Banner = () => {
    return (
        <div className='banner'>

            <div className="inner-banner">
                <div className="bg"></div>
                <h1>
                    <FormattedMessage id='home-banner-title' defaultMessage='Welcome To My Pesronal Portfolio' />
                </h1>
                <p>
                    <FormattedMessage id='home-banner-text' defaultMessage='A web developer’s job is to create websites.
                     While their primary role is to ensure the website is visually appealing and easy to navigate,
                     many web developers are also responsible for the website’s performance and capacity.' />
                </p>
                <div className="links">
                    <Link to='/' className='link1 hover-button'>
                        <FormattedMessage id='get-started-button' defaultMessage='Get Started' />
                    </Link>
                    <Link to='/' className='link2'>
                        <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
                    </Link>
                </div>
            </div>

            <div className="img"></div>
        </div>
    )
}

export default Banner
