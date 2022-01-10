import React from 'react';

import './style.scss';

import { Controls } from './components/Controls';
import { Stats } from './components/Stats';

export class Minigame extends React.Component {

    constructor(){
        super();
        this.state = {
            value:{
                hp:50,
                thirst:50,
                hungry:50,
                fatigue:50,}
           
        }
    }

    tick(){
        this.setState({
            value:{
                hp:this.state.value.hp-1,
                thirst:this.state.value.thirst+1,
                hungry:this.state.value.hungry+1,
                fatigue:this.state.value.fatigue+1,    
            }
        })
        if(this.state.value.thirst>100){
            this.setState(prevState => {return {value: {...prevState.value, thirst:100, hp:this.state.value.hp-1}}})
        }
        if (this.state.value.thirst<0){
            this.setState(prevState => {return {value: {...prevState.value, thirst:0}}})
        }
        
        if(this.state.value.hungry>100){
            this.setState(prevState => {return {value: {...prevState.value, hungry:100, hp:this.state.value.hp-1}}})
        }
        if (this.state.value.hungry<0){
            this.setState(prevState => {return {value: {...prevState.value, hungry:0}}})
        }
        
        if(this.state.value.fatigue>100){
            this.setState(prevState => {return {value: {...prevState.value, fatigue:100, hp:this.state.value.hp-1}}})
        }
        if (this.state.value.fatigue<0){
            this.setState(prevState => {return {value: {...prevState.value, fatigue:0}}})
        }

        if(this.state.value.hp>100){
            this.setState(prevState => {return {value: {...prevState.value, hp:100}}})
        }
        if (this.state.value.hp<0){
            this.setState(prevState => {return {value: {...prevState.value, hp:0}}})
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setValue = (valHp,valThirst,valHungry,valFatigue) =>{
            if (valHp !== null){
                this.setState(prevState => {return {value: {...prevState.value, hp:valHp}}})
            }
            if (valThirst !== null){
                this.setState(prevState => {return {value: {...prevState.value, thirst:valThirst}}})
            }
            if (valHungry !== null){
                this.setState(prevState => {return {value: {...prevState.value, hungry:valHungry}}})
            }
            if(valFatigue !== null){
                this.setState(prevState => {return {value: {...prevState.value, fatigue:valFatigue}}})
            }        
    }

    btnStartPause(){
        this.setState(state=>({isStartPause:!state.isStartPause}))
    }

    render(){ 
        return (
          <div className="minigame">
            <div className="minigame-interfaсe">
              <Stats value={this.state.value} />
              <Controls setValue={this.setValue} value={this.state.value} />
            </div>
            
          </div>
        );
    }
}