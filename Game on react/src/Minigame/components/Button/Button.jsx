import React from 'react';

export class Btn extends React.Component{

    render(){
        return(
            <button className={this.props.className}>{this.props.text}</button>
        )
    }
}