import React from 'react';

class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className="profile-image">Profile Image</div>
          <div className="caption">
            <h3>User name</h3>
            <p>Joined some date</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;