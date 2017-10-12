import React, { Component } from 'react';

class CreditForm extends Component {
    state = {
        newCredit: {
            description: '',
            amount: ''
        }
    }
    handleChange = (event) => {
        const newCredit = {...this.state.newCredit}
        newCredit[event.target.name] = event.target.value
        this.setState({newCredit})
    }
    handleSubmit = (event) => {
    event.preventDefault()
    const emptyForm = {
      description: '',
      amount: ''
    }
    const payload ={
        id: Math.random() * 1000,
        description: this.state.newCredit.description,
        amount: this.state.newCredit.amount,
        date: String(new Date())
    }

    this.props.updateCredits(payload)
    this.setState({newCredit: emptyForm})
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                <label>Description: </label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.newCredit.description} />
                </div>
                <div>
                <label>Amount</label>
                <input onChange={this.handleChange} type="number" name="amount" value={this.state.newCredit.amount}/>
                </div>
                <input type="submit" />
                </form>
            </div>
        );
    }
}

export default CreditForm;