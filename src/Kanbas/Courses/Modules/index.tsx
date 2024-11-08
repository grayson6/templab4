

// absolute newest 11/8

import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => {
                    dispatch(editModule(moduleId));
                  }}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}



// actually working 11/7


// import { addModule, editModule, updateModule, deleteModule }
//   from "./reducer";
// import { useSelector, useDispatch } from "react-redux";


// import React, { useState } from "react";
// import { useParams } from "react-router";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import * as db from "../../Database";

// export default function Modules() {
//   const { cid } = useParams();

//   // Initialize modules state using useState
//   const [modules, setModules] = useState<any[]>(
//     db.modules.filter((module) => module.course === cid)
//   );

//   const [moduleName, setModuleName] = useState("");

//   // const { modules } = useSelector((state: any) => state.modulesReducer);
//   // const dispatch = useDispatch();



//   const addModule = () => {
//     const newModule = {
//       _id: new Date().getTime().toString(),
//       name: moduleName,
//       course: cid,
//       lessons: [],
//     };
//     setModules([...modules, newModule]);
//     setModuleName("");
//   };


//   const deleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
//   };


//   const editModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//   };
//   const updateModule = (module: any) => {
//     setModules(modules.map((m) => (m._id === module._id ? module : m)));
//   };
  



//   return (
//     <div className="wd-modules">
//       <ModulesControls
//         moduleName={moduleName}
//         setModuleName={setModuleName}
//         addModule={addModule}
//       />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules.map((module) => (
//           <li
//             key={module._id}
//             className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
//           >
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />

//               {!module.editing && module.name}
//               { module.editing && (
//                 <input className="form-control w-50 d-inline-block"
//                onChange={(e) => updateModule({ ...module, name: e.target.value })}
//                onKeyDown={(e) => {
//                  if (e.key === "Enter") {
//                    updateModule({ ...module, editing: false });
//                  }
//                }}
//                defaultValue={module.name}/>
//       )}




//               <ModuleControlButtons
//                 moduleId={module._id}
//                 deleteModule={deleteModule}
//                 editModule={editModule}
//               />
//             </div>
//             {module.lessons && (
//               <ul className="wd-lessons list-group rounded-0">
//                 {module.lessons.map((lesson: any) => (
//                   <li
//                     key={lesson._id}
//                     className="wd-lesson list-group-item p-3 ps-1"
//                   >
//                     <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
//                     <LessonControlButtons />
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

// import { useParams } from "react-router";
// import * as db from "../../Database";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { useDispatch } from "react-redux";
// import { deleteModule, editModule } from "./reducer"; // Import the actions

// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules.filter((module) => module.course === cid);
//   const dispatch = useDispatch(); // Initialize dispatch

//   return (
//     <ul id="wd-modules" className="list-group rounded-0">
//       {modules.map((module) => (
//         <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" /> {module.name} 
//             <ModuleControlButtons 
//               moduleId={module._id} 
//               deleteModule={() => dispatch(deleteModule(module._id))} // Dispatch the action
//               editModule={() => dispatch(editModule(module._id))} // Dispatch the action
//             />
//           </div>
//           {module.lessons && (
//             <ul className="wd-lessons list-group rounded-0">
//               {module.lessons.map((lesson) => (
//                 <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
//                   <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }




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