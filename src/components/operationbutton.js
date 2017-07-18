import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store') @observer
class OperationButton extends Component{
	render(){
		return(
			<button className='operation-button'
					onClick={() => {this.props.store.handleOperationClick(this.props.operation)}}
			>{this.props.operation}</button>
		)
	}
}

export default OperationButton