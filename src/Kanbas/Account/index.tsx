import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountNavigation from './Navigation';
import Signin from './Signin';
import Signup from './Signup';
import Profile from './Profile';

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={
                        currentUser
                          ? '/Kanbas/Account/Profile'
                          : '/Kanbas/Account/Signin'
                      }
                    />
                  }
                />
                <Route path="Signin" element={<Signin />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Profile" element={<Profile />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// absolute 

// // src/Kanbas/Account/index.tsx

// import { useSelector } from "react-redux";

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import AccountNavigation from './Navigation';
// import Signin from './Signin';
// import Signup from './Signup';
// import Profile from './Profile';

// export default function Account() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   return (
//     <div id="wd-account-screen">
//       <h2>Account</h2>
//       <table>
//         <tbody>
//           <tr>

//             <td valign="top">
//               <AccountNavigation />
//             </td>


//             <td valign="top">
//               <Routes>

//                 <Route path="/" element={currentUser ? <Navigate to="/Kanbas/Account/Profile" /> : <Navigate to="/Kanbas/Account/Signin" />} />


//                 <Route path="Signin" element={<Signin />} />


//                 <Route path="Signup" element={<Signup />} />


//                 <Route path="Profile" element={<Profile />} />
//               </Routes>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
