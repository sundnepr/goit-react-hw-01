import { arrayOf } from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  console.log(typeof friends);

  return (
    <ul>
      <>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </>
    </ul>
  );
};

export default FriendList;
