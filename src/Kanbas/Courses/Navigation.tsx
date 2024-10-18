import { Link, useParams, useLocation } from "react-router-dom";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;
        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}





// 10/17 comment 

// import { Link } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";



// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
//         className="list-group-item active border border-0"> Home </Link>
//       <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border border-0"> Modules </Link>
//       <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border border-0"> Piazza </Link>
//       <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border border-0"> Zoom </Link>
//       <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
//         className="list-group-item text-danger border border-0"> Assignments </Link>
//       <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
//         className="list-group-item text-danger border border-0"> Quizzes </Link>
//       <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
//         className="list-group-item text-danger border border-0"> People </Link>
//     </div>
//   );
// }





// export default function KanbasNavigation() {
//   return (
//     <div id="wd-kanbas-navigation" style={{ width: 110 }}
//          className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//       <a id="wd-neu-link" target="_blank" 
//          href="https://www.northeastern.edu/"
//          className="list-group-item bg-black border-0 text-center">
//         <img src="/images/NEU.png" width="75px" alt="NEU Logo" /></a><br />
//       <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
//             className="list-group-item text-center border-0 bg-white text-danger">
//         <AiOutlineDashboard className="fs-1 text-danger" /><br />
//         Dashboard </Link><br />
//       <Link to="/Kanbas/Courses" id="wd-course-link"
//             className="list-group-item text-white bg-black text-center border-0">
//         <LiaBookSolid className="fs-1 text-danger" /><br />
//         Courses </Link><br />
//       <Link to="/Kanbas/Account" id="wd-account-link"
//             className="list-group-item text-center border-0 bg-black text-white">
//         <FaRegCircleUser className="fs-1 text-white" /><br />
//         Account </Link><br />
//       <Link to="/Kanbas/Calendar" id="wd-calendar-link"
//             className="list-group-item text-white bg-black text-center border-0">
//         <IoCalendarOutline className="fs-1 text-danger" /><br />
//         Calendar </Link><br />
//       <Link to="/Kanbas/Inbox" id="wd-inbox-link"
//             className="list-group-item text-white bg-black text-center border-0">
//         <FaInbox className="fs-1 text-danger" /><br />
//         Inbox </Link><br />
//       <Link to="/Kanbas/Settings" id="wd-settings-link"
//             className="list-group-item text-white bg-black text-center border-0">
//         <LiaCogSolid className="fs-1 text-danger" /><br />
//         Settings </Link><br />
//     </div>
//   );
// }