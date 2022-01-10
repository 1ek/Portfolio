import React from 'react';

import './style.scss';

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Controls extends React.Component{
    
    constructor(){
        super();
        this.onClickEat=this.onClickEat.bind(this);
        this.onClickDrink=this.onClickDrink.bind(this);
        this.onClickRelax=this.onClickRelax.bind(this);
        this.onClickWork=this.onClickWork.bind(this);
        
    }
    
    
    onClickEat () {
        this.props.setValue(
            this.props.value.hp+random(-2,2),
            null,
            this.props.value.hungry-10,
            null,
        );
    }

    onClickDrink(){
        this.props.setValue(
            this.props.value.hp+random(-1,1),
            this.props.value.thirst-10,
            null,
            null,
            );
    }
    
    onClickRelax(){
        this.props.setValue(
            this.props.value.hp+random(1,10),
            null,
            null,
            Math.round(this.props.value.fatigue*random(1,9)/10),
        )
    }
    
    onClickWork(){
        this.props.setValue(
            null,
            this.props.value.thirst+random(20,30),
            this.props.value.hungry+random(10,20),
            this.props.value.fatigue+random(30,40),
        )
    }
    
    render(){
        return(
            <div className='controls'>
                <button className='controls-eat' onClick={this.onClickEat}>Есть</button>
                <button className='controls-drink'onClick={this.onClickDrink}>Пить</button>
                <button className='controls-relax'onClick={this.onClickRelax}>Отдохнуть</button>
                <button className='controls-work'onClick={this.onClickWork}>Работать</button>
            </div>
        )
    }
} 