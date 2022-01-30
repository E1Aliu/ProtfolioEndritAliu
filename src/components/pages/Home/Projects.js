import React from 'react';
import { FormattedMessage } from 'react-intl';
import'./style/projects.scss'
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { data1 } from './data';

const breakPoints =[
    {width: 1, itemsToShow:1},
    {width: 700, itemsToShow:2},
     {width: 1100, itemsToShow:3},

]

const Projects = ()=>{
    return(
        <div id="projects" className='Porjects' >
            <h3>Projects</h3>
            <Carousel className='P-Done' breakPoints={breakPoints}>
                {
                    data1.map((props)=>{
                        return(
                            <div className='card'>
                            <div>
                            <div className='img'
                            style={{content: `url(${props.img})`}}>

                            </div>
                            </div>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <p>{props.type}</p>
                            <div className='inline'>
                            <p>{props.langused1}</p>
                            <p>{props.langused2}</p>
                            <p>{props.langused3}</p>
                            <p>{props.langused4}</p>
                            <p>{props.langused5}</p>
                            </div>
                            </div>
                        )
                    })
                }
            </Carousel>
            
        </div>
    )
}
 export default Projects;
