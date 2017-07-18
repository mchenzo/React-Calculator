import {observable, action} from 'mobx';


//calcstore needs to contain the current numbers inputted as well as actions for all operations
class CalcStore{
	@observable currentExpression = '';
	@observable needsToClear = false;
	@observable expression = '';


	@action clear = () => {
		this.currentExpression = '';
	}

	@action handleOperationClick = (op) => {
		if(op === '='){
			this.expression+=this.currentExpression
			let result = eval(this.expression)
			this.currentExpression=result
			this.needsToClear = true
		} else if (op === '%'){
			this.expression *= 100
			this.needsToClear = true
		} else if (op === 'AC'){
		 	this.clear()
		 	this.expression = ''
		} else if (op === '+/-'){
			this.currentExpression*=-1
		} else if (op === '÷'){
			this.expression += '/'
			this.needsToClear = true
		} else {
			this.expression+=this.currentExpression
			this.expression+=op
			this.needsToClear = true
		}
	}
	@action handleNumberClick = (number) => {
		if(this.needsToClear){
			this.clear()
			this.needsToClear = false
		}
		if(number === '.'){
			if(this.currentExpression.indexOf('.') === -1){
				this.currentExpression+='.'
			}
		} else if(this.currentExpression) {
			this.currentExpression+=number
		} else {
			this.currentExpression = number
		}
	}

}

var store = new CalcStore();

export default store