import React, {Component} from 'react';
import '../Forms/Form.css';


class From extends Component{
 handleDeposit() {
    if(this.refs.amount.value>0)
    {
        this.props.onDeposit(this.refs.amount.value);
    }
    else{
        alert('Value must be greater than 0')
    }
     this.refs.amount.value = '';
  }

  handleWithdraw() {
     if(this.refs.amount.value>0)
    {
        this.props.onWithdraw(this.refs.amount.value);
    }
    else{
        alert('Value must be greater than 0')
    }
    
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div>
        <header><img src="//www.pro-react.com/logos/redux-bank.svg" width="150" height="150" /><br/>Redux Bank</header>
        <br />
        <h1>Your balance is ${(this.props.balance)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="amount" />
          <br />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>

        <div className="info" onClick={this.props.onToggle}>
          <strong>Additional Info:</strong>
          <div className={this.props.ShowInformation? 'info--visible' : 'info--closed'}>
            <p><strong>Your account Manager:</strong> C. F. Frost </p>
            <p><strong>Pre approved credit limit:</strong> $500,000.00 </p>
          </div>
        </div>

      </div>
    );
  }
}

export default From;