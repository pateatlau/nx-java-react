import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const RemoteMfe1 = React.lazy(() => import('remote-mfe-1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-mfe-1">RemoteMfe1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/remote-mfe-1" element={<RemoteMfe1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
