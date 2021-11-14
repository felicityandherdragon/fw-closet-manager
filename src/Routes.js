import { Routes, Route } from 'react-router-dom';
import AddNew from './components/AddNew';
import Home from './components/Home';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/add-new" element={<AddNew />} />
    </Routes>
  );
};

export default Routing;
