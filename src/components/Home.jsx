import React, { Component } from 'react';
import { Link } from 'react-router-dom'
    
    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1>Bank of React</h1>
              <div><Link to="/user">User Page</Link></div>
              <div><Link to="/account">Account Balance</Link></div>
              <div><Link to="/debit">To Debit</Link></div>
              <div><Link to="/credit">To Credit</Link></div>
            </div>
        );
      }
    }
    
    export default Home;