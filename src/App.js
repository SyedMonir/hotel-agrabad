import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import Header from './pages/SharedComponent/Header';
import RequireAuth from './pages/SharedComponent/RequireAuth';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/room-details"
          element={
            <RequireAuth>
              <RoomDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
