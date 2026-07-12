import FriendListItem from "./FriendListItem";
function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((item) => {
        return (
            <FriendListItem key={item.id} avatar={item.avatar} isOnline={item.isOnline} name ={item.name}/>

         
        );
      })}
    </ul>
  );
}
export default FriendList;