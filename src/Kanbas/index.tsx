import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import KanbasNavigation from "./Navigation";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    description: "New Description",
    image: "/images/reactjs.jpg",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account/*" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />
          } />
          <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
  );
}


// working 11/6

// import { courses } from "./Database";
// import { Routes, Route, Navigate, useParams } from "react-router"; 
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import PeopleTable from "./Courses/People/Table";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "./styles.css";

// export default function Kanbas() {

//   const { cid } = useParams();
//   const course = courses.find((course) => course._id === cid);

//   return (
//     <div id="wd-kanbas">
//       <KanbasNavigation />
//       <div className="wd-main-content-offset p-3">
        
//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} />
//           <Route path="/Account/*" element={<Account />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/Courses" element={<Dashboard />} />
//           <Route path="/Courses/:cid/*" element={<Courses />} />
//           <Route path="/Calendar" element={<h1>Calendar</h1>} />
//           <Route path="/Inbox" element={<h1>Inbox</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }