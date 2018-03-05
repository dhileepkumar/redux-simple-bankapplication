import Constants from '../Actions/Constants';
import update from 'react-addons-update';
import {combineReducers} from 'redux';

const InitialState = {
    InitialBalance:0,
    InitialUi:{
        ShowInformation:false
    }
}

const BalanceReducer = (state = InitialState.InitialBalance,action) =>{
    switch(action.type){

        case  Constants.DEPOSIT_INTO_ACCOUNT:
        return state + parseFloat(action.amount);

        case Constants.WITHDRAW_FROM_ACCOUNT:
        return state - parseFloat(action.amount);

        default:
        return state;
    }
}


const UiReducer = (state=InitialState.InitialUi,action)=> {
     switch (action.type) {
    case Constants.TOGGLE_INFO:
    console.log('erty')
      return update(state, { ShowInformation: { $apply: true }});
    default:
      return state;
  }
}

const BankReducer =  combineReducers({balance:BalanceReducer, ui:UiReducer })



export default BankReducer;
