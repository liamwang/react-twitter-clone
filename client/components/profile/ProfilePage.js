import React from 'react';
import ProfilePicture from './ProfilePicture';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="row">
        <ProfilePicture />
      </div>
    );
  }
}

export default ProfilePage;