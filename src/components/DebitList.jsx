import React, { Component } from 'react';

class DebitList extends Component {
    render() {
        return (
             <div>
                {this.props.debits.map((debit) => {
                    return(
                        <div key={debit.id}>

                            <h4>Description: {debit.description}</h4>
                            <h4>Total: {debit.amount}</h4>
                            <h4>Date: {debit.date}</h4>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DebitList;