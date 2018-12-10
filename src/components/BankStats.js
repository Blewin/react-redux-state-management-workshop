import React from 'react';
import { connect } from "react-redux";

export function BankStats(props) {
  return <div>
    <p className="all-accounts-counter">{props.length} accounts open.</p>
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

export function mapStateToProps(state) {
  return {
    length: state.accounts ? Object.keys(state.accounts).length : 0,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankStats);