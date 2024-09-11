import React from 'react';
import './User.css'; // Import the CSS file

// Create a functional component to display user data
const User = ({ user }) => {
  return (
    <div className="user-profile">
      {/* User's Name */}
      <h1>{user.name}'s Yelp Profile</h1>

      {/* User's Stats */}
      <div className="user-stats">
        <p><strong>User ID:</strong> {user.user_id}</p>
        <p><strong>Review Count:</strong> {user.review_count}</p>
        <p><strong>Yelping Since:</strong> {user.yelping_since}</p>
        <p><strong>Average Rating:</strong> {user.average_stars} stars</p>
        <p><strong>Number of Friends:</strong> {user.friends.length}</p>
        <p><strong>Useful Votes:</strong> {user.useful}</p>
        <p><strong>Funny Votes:</strong> {user.funny}</p>
        <p><strong>Cool Votes:</strong> {user.cool}</p>
        <p><strong>Number of Fans:</strong> {user.fans}</p>
      </div>

      {/* User's Elite Years */}
      <div className="user-elite">
        <h3>Elite Years</h3>
        <ul>
          {user.elite.length > 0 ? (
            user.elite.map((year, index) => <li key={index}>{year}</li>)
          ) : (
            <li>Not Elite</li>
          )}
        </ul>
      </div>

      {/* Compliments Breakdown */}
      <div className="user-compliments">
        <h3>Compliments Received</h3>
        <p><strong>Hot:</strong> {user.compliment_hot}</p>
        <p><strong>More:</strong> {user.compliment_more}</p>
        <p><strong>Profile:</strong> {user.compliment_profile}</p>
        <p><strong>Cute:</strong> {user.compliment_cute}</p>
        <p><strong>List:</strong> {user.compliment_list}</p>
        <p><strong>Note:</strong> {user.compliment_note}</p>
        <p><strong>Plain:</strong> {user.compliment_plain}</p>
        <p><strong>Cool:</strong> {user.compliment_cool}</p>
        <p><strong>Funny:</strong> {user.compliment_funny}</p>
        <p><strong>Writer:</strong> {user.compliment_writer}</p>
        <p><strong>Photos:</strong> {user.compliment_photos}</p>
      </div>
    </div>
  );
};

export default User;
