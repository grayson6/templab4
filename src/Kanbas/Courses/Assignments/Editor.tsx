import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify...
        </textarea>
        <br />
  
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
                <option>External Tool</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" /> Text Entry<br />
              <input type="checkbox" /> Website URL<br />
              <input type="checkbox" /> Media Recordings<br />
              <input type="checkbox" /> Student Annotation<br />
              <input type="checkbox" /> File Uploads<br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Available from</label>
            </td>
            <td>
              <input type="date" value="2024-05-06" /> Until <input type="date" value="2024-05-20" />
            </td>
          </tr>
        </table>
        
        <Link to="/Kanbas/Courses/1234/Assignments">
          <button>Cancel</button>
        </Link>
        <Link to="/Kanbas/Courses/1234/Assignments">
          <button>Save</button>
        </Link>
      </div>
    );
  }
  