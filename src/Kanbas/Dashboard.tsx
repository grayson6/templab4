import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <table id="wd-dashboard-courses" style={{ width: "100%", borderSpacing: "40px" }}>
        <tr>
          {/* Course 1: CS1234 React JS */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              <img src="/images/cloud.jpg" width={200} alt="Cloud image for React JS course" />
              <div>
                <h5>CS1234 React JS</h5>
                <p className="wd-dashboard-course-title">Full Stack software developer</p>
                <button>Go</button>
              </div>
            </Link>
          </td>

          {/* Course 2: Archery */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/archery/Home">
              <img src="/images/archery.jpg" width={200} alt="Archery course" />
              <div>
                <h5>Archery 101</h5>
                <p className="wd-dashboard-course-title">Learn the Art of Archery</p>
                <button>Go</button>
              </div>
            </Link>
          </td>

          {/* Course 3: Chemistry */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
              <img src="/images/chemistry.jpg" width={200} alt="Chemistry course" />
              <div>
                <h5>Chemistry 101</h5>
                <p className="wd-dashboard-course-title">Basics of Chemistry</p>
                <button>Go</button>
              </div>
            </Link>
          </td>
        </tr>

        <tr>
          {/* Course 4: Herbology */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/herbology/Home">
              <img src="/images/herbology.jpg" width={200} alt="Herbology course" />
              <div>
                <h5>Herbology 101</h5>
                <p className="wd-dashboard-course-title">Study of Plants</p>
                <button>Go</button>
              </div>
            </Link>
          </td>

          {/* Course 5: Surfing */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/surfing/Home">
              <img src="/images/surfing.jpg" width={200} alt="Surfing course" />
              <div>
                <h5>Surfing 101</h5>
                <p className="wd-dashboard-course-title">Basics of Surfing</p>
                <button>Go</button>
              </div>
            </Link>
          </td>

          {/* Course 6: Mechanical Engineering */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/mechanical/Home">
              <img src="/images/mech.jpg" width={200} alt="Mechanical Engineering course" />
              <div>
                <h5>Mechanical Engineering 101</h5>
                <p className="wd-dashboard-course-title">Basics of Mechanical Engineering</p>
                <button>Go</button>
              </div>
            </Link>
          </td>
        </tr>

        <tr>
          {/* Course 7: Accounting */}
          <td className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/accounting/Home">
              <img src="/images/accounting.jpg" width={200} alt="Accounting course" />
              <div>
                <h5>Accounting 101</h5>
                <p className="wd-dashboard-course-title">Basics of Accounting</p>
                <button>Go</button>
              </div>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
