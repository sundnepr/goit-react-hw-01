import css from './Profile.module.css';

const Profile = ({ name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} 
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className="userName">{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Опис типів пропсів компонента
// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string,
//   price: PropTypes.number.isRequired,
// };

export default Profile;