import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store') @observer
class NumberButton extends Component{
	render(){
		return(
			<button id={this.props.idName}
					onClick={() => this.props.store.handleNumberClick(this.props.number)}
					>{this.props.number}</button>
		)
	}
}

export default NumberButton