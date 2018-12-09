import React from 'react';
import { connect } from "react-redux";

export function BankStats(props) {
  return <div>
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

export default connect(null, mapDispatchToProps)(BankStats);