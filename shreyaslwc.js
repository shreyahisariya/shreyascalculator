import { LightningElement } from 'lwc';

export default class CalcFull extends LightningElement { //this class extends Lightning component
    calcResult = '';          // hold current result
    calcExpression = '';     //hold entire arithmetic expression
    clrExpression = false;   //to clear the expression 
    prevOper = '';          // store previous operator
    operations = {
        current: 0,       //used to store immediate result
        '=': function(){   
            return this.current;  
        },
        '+': function(n){
            this.current += parseInt(n); 
            return this;
        },
        '-': function(n){
            this.current -= parseInt(n);
            return this;
        },
        '*': function(n){
            this.current *= parseInt(n);
            return this;
        },
        '/': function(n){
            this.current /= parseInt(n);
            return this;
        }
    }

    get showResult(){         // method used to return the value
        return this.operations.current;  // show current result of calculator
    }
 
    handleClick(event){      // method invoke when we click any button 
        if (this.clrExpression){ 
            this.calcExpression = ' ';
            this.calcResult = ' ';
            this.operations.current = 0;
            this.clrExpression = false;
        }
        this.calcExpression = this.calcExpression + event.target.label;
        if (event.target.label === "CLR"){ 
            this.calcResult = '';
            this.calcExpression = '';
            this.operations.current = 0;
        }
        else if (event.target.label === "+"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
                alert("this.operations.current", + this.operations.current);
            }
            else{
                this.calcResult = this.operations[this.prevOper](this.calcResult);
                alert("this.calcResult", + this.calcResult);
            }
            this.prevOper = '+';
            this.calcResult = '';
        }
        else if (event.target.label === "-"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.prevOper](this.calcResult);
            }
            this.prevOper = '-';
            this.calcResult = '';
        }
        else if (event.target.label === "*"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.prevOper](this.calcResult);
            }
            this.prevOper = '*';
            this.calcResult = '';
        }
        else if (event.target.label === "/"){
            if (this.operations.current === 0)
            {
                this.operations.current = parseInt(this.calcResult);
            }
            else{
                this.calcResult = this.operations[this.prevOper](this.calcResult);
            }
            this.prevOper = '/';
            this.calcResult = '';
        }
        else if (event.target.label === "="){
            this.calcResult = this.operations[this.prevOper](this.calcResult);
            this.calcResult = this.operations['=']();
            this.clrExpression = true;
        }
        else{
            this.calcResult = this.calcResult + event.target.label;
            
        }
    }
}
