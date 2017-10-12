import React, { Component } from 'react';

class CreditList extends Component {
    render() {
        return (
            <div>
                {this.props.credits.map((credit) => {
                    return(
                        <div key={credit.id}>

                            <h4>Description: {credit.description}</h4>
                            <h4>Total: {credit.amount}</h4>
                            <h4>Date: {credit.date}</h4>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CreditList;