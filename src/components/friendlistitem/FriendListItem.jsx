import PropTypes from 'prop-types';

const FriendListItem = function ({ friend: { avatar, name, isOnline } }) {
  return (
    <li class="item">
      <span class="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
