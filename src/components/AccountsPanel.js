import React from 'react';
import { connect } from "react-redux";

import { ConnectedCounter } from './Counter';

export function AccountsPanel(props) {
  return (
    <div className="content">
        {Object.keys(props.balances).map((userId) => (
            <ConnectedCounter userId={userId} key={userId}/>
          ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balances: state.accounts,
  }
}

export default connect(mapStateToProps)(AccountsPanel);