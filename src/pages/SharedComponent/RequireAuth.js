import { getAuth } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);

const RequireAuth = ({ children }) => {
  let location = useLocation();
  // console.log(auth);

  if (!auth.currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
