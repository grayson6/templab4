// src/Kanbas/Account/index.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountNavigation from './Navigation';
import Signin from './Signin';
import Signup from './Signup';
import Profile from './Profile';

export default function Account() {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <table>
        <tbody>
          <tr>
            {/* Account Navigation Sidebar */}
            <td valign="top">
              <AccountNavigation />
            </td>

            {/* Main Content Area */}
            <td valign="top">
              <Routes>
                {/* Default route redirects to Signin */}
                <Route path="/" element={<Navigate to="Signin" />} />

                {/* Signin Route */}
                <Route path="Signin" element={<Signin />} />

                {/* Signup Route */}
                <Route path="Signup" element={<Signup />} />

                {/* Profile Route */}
                <Route path="Profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
