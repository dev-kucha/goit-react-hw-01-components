import PropTypes from 'prop-types';
import { FriendCard, Indicator, Avatar } from './FriendListItem.styled';

const FriendListItem = function ({ friend: { avatar, name, isOnline } }) {
  return (
    <FriendCard className="item">
      <Indicator isOnline={isOnline} className="status" />

      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendCard>
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
