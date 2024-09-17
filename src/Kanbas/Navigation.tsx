// src/Kanbas/Navigation.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noopener noreferrer">
        Northeastern
      </a>
      <br />
      <Link to="/Kanbas/Account" id="wd-account-link">
        Account
      </Link>
      <br />
      {/* You can add more links here as needed */}
    </div>
  );
}
