import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img id="user-img" alt="user-img" src={userinfo.photo} />

    <div id="data-info">
      <h1>
        <a  href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h1>

      <ul className="repos-info">
        <li>
          <span>Repositórios: </span>
          {userinfo.repos}
        </li>
        <li>
          <span>Seguidores: </span>
          {userinfo.followers}
        </li>
        <li>
          <span>Seguindo: </span>
          {userinfo.following}
        </li>
      </ul>
    </div>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
