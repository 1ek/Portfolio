import React from 'react';

import './style.scss';

import {ProgressLine} from '../ProgressLine';

export class Stats extends React.Component {

    render(){
        return(
            <div className='stats'>

                <p className='stats-desc'>Здоровье:</p> <input type="number" value={this.props.value.hp} />
                <ProgressLine className='stats-hp' value ={this.props.value.hp}/>
                <p className='stats-desc'>Жажда:</p> <input type="number" value={this.props.value.thirst}/>
                <ProgressLine className='stats-thirst' value ={this.props.value.thirst}/>
                <p className='stats-desc'>Голод:</p> <input type="number" value={this.props.value.hungry} />
                <ProgressLine className='stats-hungry' value ={this.props.value.hungry}/>
                <p className='stats-desc'>Усталость:</p> <input type="number" value={this.props.value.fatigue} />
                <ProgressLine className='stats-fatigue' value ={this.props.value.fatigue}/>
                
            </div>
        )
    }
}