// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import "./App.css";

import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";

import userData from "../userData.json";
import friends from "../friendsList.json";

import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        avatar={userData.avatar}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        likes={userData.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory elements={transactions} />
    </>
  );
}
