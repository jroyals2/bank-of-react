import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import DebitView from './components/DebitView'
import CreditView from './components/CreditView'
import axios from 'axios'


class App extends Component {
  state = {
    debits: [],
    credits: [],
    user: {
      userName: "Bob",
      memberSince: 1950
    },
    accountBalance: ''
  }

searchForAllDebit = () => {
  axios.get('http://localhost:4000/debits')
  .then((res) => {
    const debits = res.data
    this.setState({debits})
    const totalDebit = 
    this.state.debits.reduce((sum, add) => {
      return sum + add.amount
    }, 0)
    const accountBalance = this.state.accountBalance - totalDebit
    this.setState({accountBalance})
  })
  .catch((error) => {
    console.log(error)
  })

}

// getBalance = () => {


// // const totalDebit = 
// //   this.state.debits.reduce((sum, add) => {
// //     return sum + add.amount
// //   }, 0)
// // const totalCredit = 
// //   this.state.credits.reduce((sum, add) => {
// //   return sum + add.amount
// // }, 0)

// return totalCredit - totalDebit
// // this.setState({accountBalance})
// }



searchForAllCredit = () => {
  axios.get('http://localhost:4000/credits')
  .then((res) => {
    const credits = res.data
    this.setState({credits})
    const totalCredit = 
    this.state.credits.reduce((sum, add) => {
    return sum + add.amount
  }, 0)
  const accountBalance = this.state.accountBalance + totalCredit
  this.setState({accountBalance})
  })
  .catch((error) => {
    console.log(error)
  })

}

updateDebits = (newDebit) => {
  console.log(newDebit)
  const newDebitList = [...this.state.debits]
  newDebitList.push(newDebit)
  console.log(newDebitList)
  this.setState({debits: newDebitList})
  const accountBalance = Number(this.state.accountBalance) - Number(newDebit.amount)
  this.setState({accountBalance})
}

updateCredits = (newCredit) => {
  console.log(newCredit)
  const newCreditList = [...this.state.credits]
  newCreditList.push(newCredit)
  console.log(newCreditList)
  this.setState({credits: newCreditList})
  const accountBalance = Number(this.state.accountBalance) + Number(newCredit.amount)
  this.setState({accountBalance})
}

componentWillMount() {
  this.searchForAllDebit()
  this.searchForAllCredit()

}

  render() {
    const AccountBalanceWrapper = () => {
      return(<AccountBalance accountBalance={this.state.accountBalance} />)
    }
    const UserProfileWrapper = () => {
      return(<UserProfile userName={this.state.user.userName} 
      memberSince={this.state.user.memberSince} />)
    }
    const DebitViewWrapper = () => {
      return(<DebitView debits={this.state.debits}
      accountBalance={this.state.accountBalance}
      searchForAllDebit={this.searchForAllDebit}
      updateDebits={this.updateDebits}
      />)
    }
    const CreditViewWrapper = () => {
      return(<CreditView credits={this.state.credits}
      accountBalance={this.state.accountBalance}
      searchForAllCredit={this.searchForAllCredit}
      updateCredits={this.updateCredits}
      />)
    }
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route path="/user" render={UserProfileWrapper} />
          <Route exact path="/debit" render={DebitViewWrapper} />
          <Route exact path="/credit" render={CreditViewWrapper} />
        </Switch>
      </Router>
    )
  }
}

export default App;
