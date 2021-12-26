import { Routes, Route } from 'react-router-dom';
import AddNew from './components/AddNew/AddNew';
import Home from './components/Home';
import CurrentCloset from './components/CurrentCloset/CurrentCloset';
import ClosetManager from './components/ClosetManager';
import Login from './components/User/LoginForm';
import Signup from './components/User/SignupForm';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-new" element={<AddNew />} />
      <Route exact path="/current-closet" element={<CurrentCloset />} />
      <Route exact path="/manager" element={<ClosetManager />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routing;
