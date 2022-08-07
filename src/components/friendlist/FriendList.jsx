import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlistitem/FriendListItem';

const FriendList = function ({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
