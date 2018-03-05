import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect, Provider} from 'react-redux';

import FormDetails from './Components/Forms/Form'
import BankStore from './Store/BankStore';
import Constants from './Actions/Constants';
import bankActionCreators from './Actions/ActionCreators'

import './App.css';

// Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  console.log(state)
  return {
    balance: state.balance,
    ShowInformation: state.ui.ShowInformation,
    errorMessage:'Fill All the FIelds'
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.DepositeIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.WithdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.ToggleInformation()),
  }
}


const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(FormDetails)


class App extends Component { 
  render() {
    return (
      <Provider store={BankStore}>
         <BankAppContainer />
      </Provider>
    );
  }
}

export default App;


