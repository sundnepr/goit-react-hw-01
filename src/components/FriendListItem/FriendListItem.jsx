import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p  style={{color: `${isOnline ? 'green' : 'red'}` }}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
