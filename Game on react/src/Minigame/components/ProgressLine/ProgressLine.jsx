import React from 'react';
import './style.scss';

export class ProgressLine extends React.Component {

    render(){
        return(
                <progress className={'progress-line ' + this.props.className} value={this.props.value} min='0' max='100'></progress>

        )
    }
} 