// import { arrayOf } from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  // console.log(typeof friends);

  return (
    <ul className={css.friendList}>
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
