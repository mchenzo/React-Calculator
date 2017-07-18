import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store') @observer
class InputBar extends Component{

//WHEN USING @INJECT, PASS METHODS FROM THE STORE USING this.props.store.method()

	render(){
		return(
				<input 
				onChange={() => this.props.store.handleTyping()}
				value={this.props.store.currentExpression}
				id='input-bar' 
				className='inputbar' 
				placeholder='0'
				/>
		)
	}
}

export default InputBar