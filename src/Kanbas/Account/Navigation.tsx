import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ['Profile'] : ['Signin', 'Signup'];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation">
      {links.map((link) => (
        <div key={link}>
          <Link to={link} id={`wd-${link.toLowerCase()}-link`}>
            {link}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}



// absolute 

// // src/Kanbas/Account/Navigation.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
//   return (
//     <div id="wd-account-navigation">
//       <Link to="Signin" id="wd-signin-link">
//         Signin
//       </Link>
//       <br />
//       <Link to="Signup" id="wd-signup-link">
//         Signup
//       </Link>
//       <br />
//       <Link to="Profile" id="wd-profile-link">
//         Profile
//       </Link>
//       <br />
//     </div>
//   );
// }
