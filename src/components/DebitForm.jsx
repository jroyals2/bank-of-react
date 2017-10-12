import React, { Component } from 'react';
import axios from 'axios'


class DebitForm extends Component {
    state = {
        newDebit: {
            description: '',
            amount: ''
        }
    }
    handleChange = (event) => {
        const newDebit = {...this.state.newDebit}
        newDebit[event.target.name] = event.target.value
        this.setState({newDebit})
    }
    handleSubmit = (event) => {
    event.preventDefault()
    const emptyForm = {
      description: '',
      amount: ''
    }
    const payload ={
        id: Math.random() * 1000,
        description: this.state.newDebit.description,
        amount: this.state.newDebit.amount,
        date: String(new Date())
    }

    this.props.updateDebits(payload)
    this.setState({newDebit: emptyForm})
}

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                <label>Description: </label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.newDebit.description} />
                </div>
                <div>
                <label>Amount</label>
                <input onChange={this.handleChange} type="number" name="amount" value={this.state.newDebit.amount}/>
                </div>
                <input type="submit" />
                </form>
            </div>
        );
    }
}

export default DebitForm;

