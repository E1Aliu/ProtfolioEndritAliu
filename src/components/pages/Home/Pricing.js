import React from 'react'
// import './pricing.scss'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { data4 } from './data'
import './style/pricing.scss'

const Pricing = () => {
    return (
        <div id="pricing"className='shared-pricing-scales'>
            <h5>
                <FormattedMessage id='pricing-subtitle' defaultMessage='FLEXIBLE PRICING' />
            </h5>

            <div className="cards">
                {data4.map((props) => {
                    return(
                        <div className="card">
                            <h2>{props.title}</h2>
                            <h3>{props.price}</h3>
                            <div className="month">
                                <FormattedMessage id='per-month' defaultMessage='Per month' />
                            </div>
                            <Link to={props.to}>
                                <FormattedMessage id='start-trial' defaultMessage='Start Trial' />
                            </Link>
                            <p>{props.description}</p>
                            <div className="line"></div>
                            <h4>{props.text}</h4>
                            {props.items.map((l) => {
                                return(
                                    <div className="item">
                                        <div className="icon" style={{content:`url(${l.icon})`}}></div>
                                        <span>{l.item}</span>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Pricing
