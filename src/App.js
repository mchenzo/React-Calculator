import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import NumberButton from './components/numberbutton';
import OperationButton from './components/operationbutton';
import InputBar from './components/inputbar';
import store from './store/store'


//ONLY PROPS CAN BE PASSED TO COMPONENTS
//CANNOT ADD EVENT HANDLERS OR CLASSES ETC TO COMPONENTS HERE
class App extends Component {

    render() {
    	let sciCalcButtons = ['(', ')','mc','m+','m-','mr','AC','+/-','%','÷',
    							'2nd','^2','^3','^y','e^x','10^x','7','8','9',
    							'1/x','^1/2','^1/3','^1/y','ln','log10','4','5','6','-',
    							'x!','sin','cos','tan','e','EE','1','2','3','+',
    							'Rad','sinh','cosh','tanh','π','Rand','0','.','='].map((btn) => {
    								if(isNaN(btn)) {
										return <OperationButton 
											class='sci-operation' 
											key={btn} 
											operation={btn} /> 
									} else if (btn === '0') {
										return <NumberButton key={btn} number={btn} idName='zero' />
									}
									else {return <NumberButton key={btn} number={btn} />}
    							})

    	let regCalcButtons = ['AC', '+/-', '%', '÷',
						'7', '8', '9', '*',
						'4', '5', '6', '-',
						'1', '2', '3', '+',
						'0', '.', '='].map((btn)=>{
							
							if (btn === '0') {
								return <NumberButton key={btn} number={btn} idName='zero' />
							} else if (btn === '.') {
								return <NumberButton key={btn} number={btn} />
							} else if(isNaN(btn)) {
								return <OperationButton key={btn} operation={btn} /> 
							} else {return <NumberButton key={btn} number={btn} />} 
							
						})

        return (
        	<Provider store={store} >
        	<div>
        		<button className='calculator-mode'>Scientific</button>
        		<button className='calculator-mode'>Regular</button>
	            <div className='calculator'>
	            	<InputBar />
	                {regCalcButtons}
	            </div>
	            </div>
	        </Provider>
        )
    }
}

export default App;

