import Dashboard from './pages/Dashboard';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
