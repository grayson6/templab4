// src/Kanbas/Courses/Modules/index.tsx

import { Link } from "react-router-dom";

export default function Modules() {
  return (
    <div>
      {/* Modules Controls */}
      <div id="wd-modules-controls">
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <select id="wd-publish-all">
          <option value="">Publish All</option>
          <option value="publish">Publish All</option>
          <option value="unpublish">Unpublish All</option>
        </select>
        <button id="wd-add-module">+ Module</button>
      </div>

      {/* Modules List */}
      <ul id="wd-modules">
        {/* Week 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1: Introduction to Web Development</div>
          <ul className="wd-lessons">
            {/* Learning Objectives */}
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Understand the basics of the Internet and the Web
                </li>
                <li className="wd-content-item">
                  Learn about HTML structure and syntax
                </li>
                <li className="wd-content-item">
                  Introduction to CSS for styling web pages
                </li>
              </ul>
            </li>
            {/* Lecture 1 */}
            <li className="wd-lesson">
              <span className="wd-title">Lecture 1: Getting Started with HTML</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Reading1">READING: HTML Basics</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Slides1">SLIDES: Introduction to HTML</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Assignment1">ASSIGNMENT: Create a Simple Web Page</Link>
                </li>
              </ul>
            </li>
            {/* Lecture 2 */}
            <li className="wd-lesson">
              <span className="wd-title">Lecture 2: Introduction to CSS</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Reading2">READING: CSS Fundamentals</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Slides2">SLIDES: Styling with CSS</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Assignment2">ASSIGNMENT: Style Your Web Page</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module">
          <div className="wd-title">Week 2: JavaScript Basics</div>
          <ul className="wd-lessons">
            {/* Learning Objectives */}
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Understand JavaScript syntax and data types
                </li>
                <li className="wd-content-item">
                  Learn how to manipulate the DOM with JavaScript
                </li>
                <li className="wd-content-item">
                  Introduction to event handling in JavaScript
                </li>
              </ul>
            </li>
            {/* Lecture 3 */}
            <li className="wd-lesson">
              <span className="wd-title">Lecture 3: JavaScript Fundamentals</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Reading3">READING: JavaScript Basics</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Slides3">SLIDES: Introduction to JavaScript</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Assignment3">ASSIGNMENT: Add Interactivity to Your Page</Link>
                </li>
              </ul>
            </li>
            {/* Lecture 4 */}
            <li className="wd-lesson">
              <span className="wd-title">Lecture 4: DOM Manipulation</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Reading4">READING: Manipulating the DOM</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Slides4">SLIDES: DOM Manipulation Techniques</Link>
                </li>
                <li className="wd-content-item">
                  <Link to="/Kanbas/Courses/1234/Assignment4">ASSIGNMENT: DOM Manipulation Project</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>


      </ul>
    </div>
  );
}
