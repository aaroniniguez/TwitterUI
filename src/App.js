import React, { Component, useEffect, useState} from "react";
import "./App.css";
import {getAllAccountsFollowers, getAccounts} from "../src/services/apiService"
import FollowersGraph from "./FollowersGraph";
import AddNewTwitterForm from "./components/Forms/AddNewTwitterAccount";
import TwitterAccountCharts from "./components/TwitterAccountCharts";
import {AccountsProvider} from "./stores/accountsStore/accountsProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment"
if (module.hot) {
  console.log("so hot")
  // Capture hot update
  // module.hot.accept("./AddNewTwitterAccount", () => {
  //   const nextComponent = AddNewTwitterForm;

  //   // Replace old content with the hot loaded one
  //   document.body.replaceChild(nextComponent, demoComponent);

  //   demoComponent = nextComponent;
  // });
}


function App(props) {
  let [accounts, setAccounts] = useState([]);
  let [followersRecords, setFollowersRecords] = useState([]);
    useEffect(() => {
      //L LT
        getAllAccountsFollowers((response) => setFollowersRecords(response.data));
        getAccounts((response) => setAccounts(response.data));
    }, []);

    function getChartData(followingRecords) {
      let chartData = followingRecords.map((followingRecord) => {
        let time = moment(followingRecord.time).format("L LT");
        return {time, followers: followingRecord.followers}
      });
      return chartData;
    }
    return (
      <div className="App">
        <h1>Twitter Account Tracker</h1>
          <AccountsProvider>
          <AddNewTwitterForm/>
          <TwitterAccountCharts/>
          {accounts.map((account) => {
            let link = `https://twitter.com/${account.username}`;
            return (
              <div key={account.id}>
                <a target="_blank" key={account.id} href={link}>{link}</a>
                <ul>
                  {
                    (followersRecords[account.id] === undefined) ? (
                      <React.Fragment>
                        <li>Following: 0</li>
                        <li>Followers: 0</li>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <li>Following: {account.following}</li>
                        <li>Followers: {followersRecords[account.id][followersRecords[account.id].length-1].followers}</li>
                        <FollowersGraph data={getChartData(followersRecords[account.id])}/>
                      </React.Fragment>
                    )
                  }
                </ul>
              </div>
            )
          })}
          </AccountsProvider>
      </div>
    )
}
export default App;