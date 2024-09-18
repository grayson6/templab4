import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link"
                to="/Kanbas/Courses/1234/Assignments/1">
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link"
                to="/Kanbas/Courses/1234/Assignments/2">
            A2 - CSS + Box Model
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link"
                to="/Kanbas/Courses/1234/Assignments/3">
            A3 - JavaScript Basics
          </Link>
        </li>
        {/* Add more assignments as needed */}
      </ul>
    </div>
  );
}
