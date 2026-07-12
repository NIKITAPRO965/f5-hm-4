function FriendListItem({isOnline, avatar, name}){
    return ( <li>
            <span>{isOnline ? "online" : "offline"}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </li>)
}
export default FriendListItem