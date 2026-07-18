import Profile from "./components/Profile";

import "./App.css";
import user from "./user.json";
import Statistics from "./components/Statistics";

import data from "./data.json";
import FriendList from "./components/FriendList";
import friends from "./friends.json"
import transactions from "./transactions.json"
import TransactionsHistory from "./components/TransactionHistory";
// import Title from "./components/Title"

function App() {
  return (
    <>
    {/* <Title /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
  {/* <Statistics stats={data} /> */}
  <FriendList friends={friends} />
  <TransactionsHistory items={transactions} />
    </>

  );
}

export default App;