import React from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
            )
            .map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

// pre 10/17

// import { FaUserCircle } from "react-icons/fa";
// export default function PeopleTable() {
//   return (
//     <div id="wd-people-table">
//       <table className="table table-striped">
//         <thead>
//           <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
//         </thead>
//         <tbody>
//           <tr><td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Tony</span>{" "}
//               <span className="wd-last-name">Stark</span></td>
//             <td className="wd-login-id">001234561S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01</td>
//             <td className="wd-total-activity">10:21:32</td> </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Bruce</span>{" "}
//               <span className="wd-last-name">Wayne</span>
//             </td>
//             <td className="wd-login-id">001234562W</td>
//             <td className="wd-section">S102</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-02</td>
//             <td className="wd-total-activity">08:45:19</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Steve</span>{" "}
//               <span className="wd-last-name">Rogers</span>
//             </td>
//             <td className="wd-login-id">001234563R</td>
//             <td className="wd-section">S103</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-03</td>
//             <td className="wd-total-activity">12:33:47</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Natasha</span>{" "}
//               <span className="wd-last-name">Romanoff</span>
//             </td>
//             <td className="wd-login-id">001234564R</td>
//             <td className="wd-section">S104</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-04</td>
//             <td className="wd-total-activity">09:57:23</td>
//           </tr>

//         </tbody>
//       </table>
//     </div> );}