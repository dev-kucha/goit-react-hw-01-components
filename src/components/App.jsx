// import styled from '@emotion/react';
import { Profile } from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactionhistory/TransactionHistory';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactions from './transactionhistory/transactions.json';

export default function App() {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
