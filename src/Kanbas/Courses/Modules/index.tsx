// import React, { useState } from "react";
// import { useParams } from "react-router";
// import * as db from "../../Database";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import ModulesControls from "./ModulesControls";

// interface Lesson {
//   _id: string;
//   name: string;
// }

// interface Module {
//   _id: string;
//   name: string;
//   course: string;
//   lessons?: Lesson[];
// }

// export default function Modules() {
//   const { cid } = useParams();
//   const [modules, setModules] = useState<Module[]>(db.modules.filter((module) => module.course === cid));
//   const [moduleName, setModuleName] = useState("");

//   const addModule = () => {
//     if (moduleName.trim() === "") return; // Prevent adding empty module names
//     const newModule: Module = {
//       _id: new Date().getTime().toString(),
//       name: moduleName,
//       course: cid || "",
//       lessons: [],
//     };
//     setModules([...modules, newModule]);
//     setModuleName(""); // Reset the module name input
//   };

//   return (
//     <div>
//       <ModulesControls 
//         moduleName={moduleName} 
//         setModuleName={setModuleName} 
//         addModule={addModule} 
//       />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules.map((module) => (
//           <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
//             </div>
//             {module.lessons && (
//               <ul className="wd-lessons list-group rounded-0">
//                 {module.lessons.map((lesson: Lesson) => (
//                   <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
//                     <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// working 11/6

import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid);

  return (
    <ul id="wd-modules" className="list-group rounded-0">
      {modules.map((module) => (
        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
          </div>
          {module.lessons && (
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson) => (
                <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}



// Pre 10/17

// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from "react-icons/bs";

// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Modules() {
//   return (
//     <div>
//       {/* <ModulesControls /><br /><br /><br /> */}
//       <ul id="wd-modules" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             Week 1
//             <ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Introduction to the course
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               Learn what is Web Development
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             Week 2
//             <ModuleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LEARNING OBJECTIVES
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 1
//               <LessonControlButtons />
//             </li>
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               <BsGripVertical className="me-2 fs-3" />
//               LESSON 2
//               <LessonControlButtons />
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }