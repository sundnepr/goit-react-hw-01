import css from './FriendListItem.module.css';
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p   className={clsx(css.status, {
          [css.online]: isOnline === true,
          [css.offline]: isOnline === false,
        })} >{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
