import React from "react";
import'./style/technologies.scss'
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { data2 } from './data';

const Technologies =()=>{
    return(
        <div id="technologies" className="Technologies">
            <h2>Technologies</h2>
            <h3>I have worked with a range a texhnologies in the web
                development world.From Back-end to Design.
            </h3>
            <div className="K-t">
                {
                    data2.map((props)=>{
                        return(
                            <div className="font-img">
                                <div className='img'
                                style={{content: `url(${props.icone})`}}>

                                </div>
                            <div className="desc">
                                <p>{props.title}</p>
                                <p>{props.description}</p>
                            </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Technologies;

