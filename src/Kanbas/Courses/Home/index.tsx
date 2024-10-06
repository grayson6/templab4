import Modules from "../Modules";
import CourseStatus from "./Status";
import ModulesControls from "../Modules/ModulesControls";

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap">
        <ModulesControls />
      </div>
      <div className="d-flex flex-wrap">
        <div className="flex-grow-1">
          <Modules />
        </div>
        <div className="flex-shrink-0" id="course-status-container">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}







// export default function Home() {
//   return (
//     <table id="wd-home">
//       <tr>
//         <td valign="top">
//           <Modules />
//         </td>
//         <td valign="top">
//           <CourseStatus />
//         </td>
//       </tr>
//     </table>
//   );
// }
