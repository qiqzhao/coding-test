import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './app.css';
import Home from './pages/home';
import About from './pages/about';
import { ProfileDetail } from './pages/profile/detail';
import { ProfileEditPage } from './pages/profile/edit';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ProfileDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfileDetail />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
