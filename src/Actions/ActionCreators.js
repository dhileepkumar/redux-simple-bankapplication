import Constant from '../Actions/Constants'

const BankActionCreators = {
    WithdrawFromAccount(amount){
         console.log('Details Amount:'+amount)
        return {
            type: Constant.WITHDRAW_FROM_ACCOUNT,
            amount: amount 
        };
    },

    DepositeIntoAccount(amount){
        console.log('Amount:'+amount)
        return {
            type: Constant.DEPOSIT_INTO_ACCOUNT,
            amount: amount 
        };
    },

    ToggleInformation(amount){
        return {
            type:Constant.TOGGLE_INFO
        }
    }
} 

export default BankActionCreators;