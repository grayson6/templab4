// src/Kanbas/Account/Navigation.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to="Signin" id="wd-signin-link">
        Signin
      </Link>
      <br />
      <Link to="Signup" id="wd-signup-link">
        Signup
      </Link>
      <br />
      <Link to="Profile" id="wd-profile-link">
        Profile
      </Link>
      <br />
    </div>
  );
}
