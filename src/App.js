import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import NumberButton from './components/numberbutton';
import OperationButton from './components/operationbutton';
import InputBar from './components/inputbar';
import store from './store/store'

const regCalcButtons = ['AC', '+/-', '%', '÷',
						'7', '8', '9', '*',
						'4', '5', '6', '-',
						'1', '2', '3', '+',
						'0', '.', '=']
const sciCalcButtons = []

//ONLY PROPS CAN BE PASSED TO COMPONENTS
//CANNOT ADD EVENT HANDLERS OR CLASSES ETC TO COMPONENTS HERE
class App extends Component {



    render() {
        return (

        	<Provider store={store} >
        	<div>
        		<button className='calculator-mode'>Scientific</button>
        		<button className='calculator-mode'>Regular</button>
	            <div className='calculator'>
	                <InputBar />
	                <OperationButton operation='AC'/>
	                <OperationButton operation='+/-'/>
	                <OperationButton operation='%'/>
	                <OperationButton operation='÷'/>

	                <NumberButton number='7'/>
	                <NumberButton number='8'/>
	                <NumberButton number='9'/>
	                <OperationButton operation='*'/>

	                <NumberButton number='4'/>
	                <NumberButton number='5'/>
	                <NumberButton number='6'/>
	                <OperationButton operation='-'/>

	                <NumberButton number='1'/>
	                <NumberButton number='2'/>
	                <NumberButton number='3'/>
	                <OperationButton operation='+'/>

	                <NumberButton number='0' class='zero'/>
	                <NumberButton number='.'/>
	                <OperationButton operation='='/>
	            </div>
	            </div>
	        </Provider>
        )
    }
}

export default App;
