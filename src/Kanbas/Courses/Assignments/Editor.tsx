import { useParams, Link } from "react-router-dom";
import dbAssignments from '../../Database/assignments.json';

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableDate?: string;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = dbAssignments.find((assignment: Assignment) => assignment._id === aid) as Assignment;

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const fullAssignment = assignment as Assignment;

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h2>{assignment.title}</h2>
      <input id="wd-name" className="form-control mb-3" value={assignment.title} readOnly />
      <div className="mb-3">
        <label>Description</label>
        <textarea className="form-control" value={assignment.description} readOnly />
      </div>
      <div className="mb-3">
        <label>Points</label>
        <input className="form-control" value={assignment.points} readOnly />
      </div>
      <div className="mb-3">
        <label>Due Date</label>
        <input className="form-control" value={assignment.dueDate} readOnly />
      </div>
      <div className="mb-3">
        <label>Available Date</label>
        <input className="form-control" value={assignment.availableDate} readOnly />
      </div>
      <div>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary me-2">Cancel</button>
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button className="btn btn-primary">Save</button>
        </Link>
      </div>
    </div>
  );
}


// pre 10/17

// import { Link } from "react-router-dom";

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor" className="container mt-4">
//       <h2>Assignment Name</h2>
//       <input id="wd-name" className="form-control mb-3" value="A1" />

//       <h3>Description</h3>
//       <textarea id="wd-description" className="form-control mb-3" rows={5}>
//         The assignment is available online. Submit a link to the landing page of your Web application running on Netlify...
//       </textarea>

//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-points" className="form-label">Points</label>
//           <input id="wd-points" className="form-control" value={100} />
//         </div>
//         <div className="col">
//           <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
//           <select id="wd-assignment-group" className="form-select">
//             <option>ASSIGNMENTS</option>
//             <option>QUIZZES</option>
//             <option>EXAMS</option>
//             <option>PROJECT</option>
//           </select>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-display-grade" className="form-label">Display Grade as</label>
//           <select id="wd-display-grade" className="form-select">
//             <option>Percentage</option>
//             <option>Points</option>
//             <option>Complete/Incomplete</option>
//           </select>
//         </div>
//         <div className="col">
//           <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//           <select id="wd-submission-type" className="form-select">
//             <option>Online</option>
//             <option>On Paper</option>
//             <option>External Tool</option>
//           </select>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Online Entry Options</label>
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id="text-entry" />
//           <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
//         </div>
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id="website-url" />
//           <label className="form-check-label" htmlFor="website-url">Website URL</label>
//         </div>
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id="media-recordings" />
//           <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
//         </div>
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id="student-annotation" />
//           <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
//         </div>
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id="file-uploads" />
//           <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
//           <input id="wd-assign-to" className="form-control" value="Everyone" />
//         </div>
//         <div className="col">
//           <label htmlFor="wd-due-date" className="form-label">Due</label>
//           <input id="wd-due-date" type="date" className="form-control" value="2024-05-13" />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col">
//           <label className="form-label">Available from</label>
//           <input type="date" className="form-control" value="2024-05-06" />
//         </div>
//         <div className="col">
//           <label className="form-label">Until</label>
//           <input type="date" className="form-control" value="2024-05-20" />
//         </div>
//       </div>

//       <div className="d-flex justify-content-end">
//         <Link to="/Kanbas/Courses/1234/Assignments" className="btn btn-secondary me-2">
//           Cancel
//         </Link>
//         <Link to="/Kanbas/Courses/1234/Assignments" className="btn btn-danger">
//           Save
//         </Link>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <label htmlFor="wd-name">Assignment Name</label>
//         <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
//         <textarea id="wd-description">
//           The assignment is available online Submit a link to the landing page of your Web application running on Netlify...
//         </textarea>
//         <br />
  
//         <table>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//               <input id="wd-points" value={100} />
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-assignment-group">Assignment Group</label>
//             </td>
//             <td>
//               <select id="wd-assignment-group">
//                 <option>ASSIGNMENTS</option>
//                 <option>QUIZZES</option>
//                 <option>EXAMS</option>
//                 <option>PROJECT</option>
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-display-grade">Display Grade as</label>
//             </td>
//             <td>
//               <select id="wd-display-grade">
//                 <option>Percentage</option>
//                 <option>Points</option>
//                 <option>Complete/Incomplete</option>
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-submission-type">Submission Type</label>
//             </td>
//             <td>
//               <select id="wd-submission-type">
//                 <option>Online</option>
//                 <option>On Paper</option>
//                 <option>External Tool</option>
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label>Online Entry Options</label>
//             </td>
//             <td>
//               <input type="checkbox" /> Text Entry<br />
//               <input type="checkbox" /> Website URL<br />
//               <input type="checkbox" /> Media Recordings<br />
//               <input type="checkbox" /> Student Annotation<br />
//               <input type="checkbox" /> File Uploads<br />
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-assign-to">Assign To</label>
//             </td>
//             <td>
//               <input id="wd-assign-to" value="Everyone" />
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-due-date">Due</label>
//             </td>
//             <td>
//               <input id="wd-due-date" type="date" value="2024-05-13" />
//             </td>
//           </tr>
//           <tr>
//             <td align="right" valign="top">
//               <label>Available from</label>
//             </td>
//             <td>
//               <input type="date" value="2024-05-06" /> Until <input type="date" value="2024-05-20" />
//             </td>
//           </tr>
//         </table>
        
//         <Link to="/Kanbas/Courses/1234/Assignments">
//           <button>Cancel</button>
//         </Link>
//         <Link to="/Kanbas/Courses/1234/Assignments">
//           <button>Save</button>
//         </Link>
//       </div>
//     );
//   }
  