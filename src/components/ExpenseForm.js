import React from 'react'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';

const now = moment()

export default class ExpenseForm extends React.Component{
    state = {
        description:'',
        note:'',
        amount: '',
        createdAt:moment(),
        calenderfocused: false,

    }
     onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }
    onAmountChange=(e)=>{
        const amount = e.target.value

        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }
    onFocusChange = ({focused}) =>{
        this.setState(()=>({
            calenderfocused:focused
        }))
    }
    onDateChange = (createdAt) => {
        this.setState(()=>({
            createdAt
        }))
    }
    render(){

        return(
            <div>
                <form >
                    <input 
                        type ="text"
                        placeholder = "Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /> 
                    <input 
                        type="text"
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderfocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange={()=> false}
                        
                         />
                    <textarea 
                        placeholder="Put expense details here."
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}