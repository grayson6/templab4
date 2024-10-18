import { courses } from "./Database";
import { Routes, Route, Navigate, useParams } from "react-router"; 
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles.css";

export default function Kanbas() {

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}