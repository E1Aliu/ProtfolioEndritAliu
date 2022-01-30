import React from 'react';
import './style/personalacomplishments.scss';
import { Link } from 'react-router-dom';
import { formatMessage } from '@formatjs/intl';
import { data3 } from './data';


const PersonalAcomplishments=()=>{
    return(
        <div className='PAcomplishments'>
            <h2>Personal Acomplishments</h2>
            <div className='Cards-1'>
            {
                data3.map((props)=>{
                    return(
                        <div className='PersonalCard'>
                            <p>{props.number}</p>
                            <p>{props.type}</p>
                        </div>

                    )
                })
            }
            </div>
        </div>

    )
}
export default PersonalAcomplishments;