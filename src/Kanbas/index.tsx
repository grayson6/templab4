// src/Kanbas/index.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import KanbasNavigation from './Navigation';
import Account from './Account';

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tbody>
          <tr>
            {/* Kanbas Navigation Sidebar */}
            <td valign="top">
              <KanbasNavigation />
            </td>

            {/* Main Content Area */}
            <td valign="top">
              <Routes>
                {/* Default route redirects to Account */}
                <Route path="/" element={<Navigate to="Account" />} />

                {/* Account Route */}
                <Route path="Account/*" element={<Account />} />

                {/* Future routes like Dashboard can be added here */}
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
