import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import PeopleTable from "./People/Table"; 

export default function Courses() {
  return (
    <div id="wd-courses" className="d-flex">
      <CoursesNavigation />
      <div className="flex-grow-1" style={{ marginLeft: "110px", padding: "20px" }}>
        <h2>Course 1234</h2>
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} /> 
        </Routes>
      </div>
    </div>
  );
}
// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//       <hr />
//       <div>
//         <div>
//           <CoursesNavigation />
//         </div>
//         <div>
//           <Routes>
//             <Route path="/"
//                    element={<Navigate to="Home" />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Modules" element={<Modules />} />
//             <Route path="Assignments" element={<Assignments />} />
//             <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//             <Route path="People" element={<h3>People</h3>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
// );}




// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//       <hr />
// <      <table>
//         <tr>
//           <td valign="top">>
//             <CoursesNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//               <Route path="/"
//                      element={<Navigate to="Home" />} />
//               <Route path="Home" element={<Home />} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<Assignments />} />
//               <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//               <Route path="People" element={<h3>People</h3>} />
//             </Routes>
//           </td>
//         </tr>
//       </table>
//     </div>

    
// );}
