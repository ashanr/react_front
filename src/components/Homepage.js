import React from 'react'; // Make sure to import React
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to Our Sports Shop</h1>
      <p>This is the homepage of our Sales and Inventory System.</p>
      <Link to="/login">Login to Your Account</Link>
      // Add more content and links as needed
    </div>
  );
}

export default Homepage; // Add this line to export the Homepage component
