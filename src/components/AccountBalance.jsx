import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
class AccountBalance extends Component {
    
    state = {
        redirectToHome: false
    }

    saveSomething = () => {
        console.log('Clicked')
        setTimeout(() => {
            this.setState({redirectToHome: true})
        }, 1500)
    }

    render() {
    
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }

        return (
            <div>
                Account Balance
                <div>
                Your Balance is {this.props.accountBalance}
                </div>
            <button onClick={this.saveSomething}>Redirect Button</button>
                <Link to="/">Home Page</Link>
            </div>
        );
    }
}

export default AccountBalance;