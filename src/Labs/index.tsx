// src/Labs/index.tsx

import { Routes, Route, Navigate } from 'react-router-dom';
import TOC from './TOC';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p> Name: Grayson Cooper; CS5610 FA24 Async Online </p>
      <TOC />
      <a id="wd-github" href="https://github.com/grayson6/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}

// // src/Labs/index.tsx

// import { Routes, Route, Navigate } from 'react-router-dom';
// import TOC from './TOC';
// import Lab1 from './Lab1';
// import Lab2 from './Lab2';
// import Lab3 from './Lab3';

// export default function Labs() {
//   return (
//     <div>
//       <h1>Labs</h1>
//       <p> Name: Grayson Cooper; CS5610 FA24 Async Online </p>
//       <TOC />
//       <Routes>
//         <Route path="/" element={<Navigate to="Lab1" />} />
//         <Route path="Lab1" element={<Lab1 />} />
//         <Route path="Lab2" element={<Lab2 />} />
//         <Route path="Lab3" element={<Lab3 />} />
//       </Routes>
//     </div>
//   );
// }
