import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DebitList from './DebitList'
import DebitForm from './DebitForm'

class DebitView extends Component {
    render() {
        return (
            <div>
                <Link to="/">Go To Home</Link>
                <h1>Account Balance: {this.props.accountBalance} </h1>
                <h1>Debits</h1>
                <DebitForm 
                searchForAllDebit={this.props.searchForAllDebit} 
                updateDebits={this.props.updateDebits}
                />
                <DebitList debits={this.props.debits}/>
                
                
            </div>
        );
    }
}

export default DebitView;