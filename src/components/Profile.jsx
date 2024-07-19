const Profile = ({ name, tag, location, stats }) => {
  return (
    <div className = "card">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className="userName">{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
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
