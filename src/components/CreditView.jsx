import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CreditList from './CreditList'
import CreditForm from './CreditForm'

class CreditView extends Component {
    render() {
        return (
            <div>
                <Link to="/">Go To Home</Link>
                <h1>Account Balance: {this.props.accountBalance} </h1>
                <h1>Credits</h1>
                <CreditForm 
                searchForAllCredit={this.props.searchForAllCredit} 
                updateCredits={this.props.updateCredits}
                />
                <CreditList credits={this.props.credits}/>
            </div>
        );
    }
}

export default CreditView;