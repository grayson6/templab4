import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/1234/Home" className="text-decoration-none text-dark">
              <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack software developer</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/archery/Home" className="text-decoration-none text-dark">
              <img src="/images/archery.jpg" className="card-img-top" alt="Archery course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Archery 101</h5>
                <p className="card-text">Learn the Art of Archery</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/5678/Home" className="text-decoration-none text-dark">
              <img src="/images/chemistry.jpg" className="card-img-top" alt="Chemistry course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Chemistry 101</h5>
                <p className="card-text">Basics of Chemistry</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/herbology/Home" className="text-decoration-none text-dark">
              <img src="/images/herbology.jpg" className="card-img-top" alt="Herbology course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Herbology 101</h5>
                <p className="card-text">Study of Plants</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/surfing/Home" className="text-decoration-none text-dark">
              <img src="/images/surfing.jpg" className="card-img-top" alt="Surfing course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Surfing 101</h5>
                <p className="card-text">Basics of Surfing</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/mechanical/Home" className="text-decoration-none text-dark">
              <img src="/images/mech.jpg" className="card-img-top" alt="Mechanical Engineering course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Mechanical Engineering 101</h5>
                <p className="card-text">Basics of Mechanical Engineering</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="col" style={{ width: "270px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link to="/Kanbas/Courses/accounting/Home" className="text-decoration-none text-dark">
              <img src="/images/accounting.jpg" className="card-img-top" alt="Accounting course" style={{ height: "160px" }} />
              <div className="card-body">
                <h5 className="card-title">Accounting 101</h5>
                <p className="card-text">Basics of Accounting</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}