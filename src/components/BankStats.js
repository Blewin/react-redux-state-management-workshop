import React from 'react';
import { connect } from "react-redux";

export function BankStats(props) {
  return <div>
    <p className="all-accounts-counter">{props.balances ? Object.keys(props.balances).length : 0} accounts open.</p>
    <button onClick={props.openNewAccount} className="new-account-button">
      Open new account
    </button>
  </div>;
  /*
  return (
    <AccountsContext.Consumer>
      {({ balances, openNewAccount }) => (
        <div>
          <p>{balances.length} open accounts.</p>

          <button onClick={openNewAccount} className="new-account-button">
            Open new account
          </button>
        </div>
      )}
    </AccountsContext.Consumer>
  );*/
}

export function mapDispatchToProps(dispatch) {
  return {
    openNewAccount: () => dispatch({type: 'CREATE'}),
  }
}

function mapStateToProps(state) {
  return {
    balances: state.accounts,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BankStats);