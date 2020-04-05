import * as React from 'react';
import {reducer} from  "./accountsReducer";
import {AccountsProviderContext} from "./accountsContext";

const defaultState = {
    accounts: [],
    followersRecords: []
}

export const AccountsProvider = (props) => {
    //get state and dispatch value
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    return (
        <AccountsProviderContext value={{state, dispatch}}>
            {props.children}
        </AccountsProviderContext>
    )

}