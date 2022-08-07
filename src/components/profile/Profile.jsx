import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsItemLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>
      <Stats className="stats">
        <StatsItem>
          <StatsItemLabel className="label">Followers</StatsItemLabel>
          <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel className="label">Views</StatsItemLabel>
          <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsItemLabel className="label">Likes</StatsItemLabel>
          <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
