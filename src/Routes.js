import { Routes, Route } from 'react-router-dom';
import AddNew from './components/AddNew';
import Home from './components/Home';
import CurrentCloset from './components/CurrentCloset';
import ClosetManager from './components/ClosetManager';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-new" element={<AddNew />} />
      <Route exact path="/current-closet" element={<CurrentCloset />} />
      <Route exact path="/manager" element={<ClosetManager />} />
    </Routes>
  );
};

export default Routing;
