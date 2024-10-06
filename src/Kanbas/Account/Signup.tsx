import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />
      <Link to="Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="Signin" className="text-primary">
        Sign in
      </Link>
    </div>
  );
}



// // src/Kanbas/Account/Signup.tsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign up</h3>
//       <input placeholder="username" /> <br />
//       <input placeholder="password" type="password" /> <br />
//       <input placeholder="verify password" type="password" /> <br />
//       <Link to="Profile">Sign up</Link>
//       <br />
//       <Link to="Signin">Sign in</Link>
//     </div>
//   );
// }
