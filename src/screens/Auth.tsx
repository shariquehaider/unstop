

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Auth() {
  const { isAuthenticated } = useSelector((state:any) => state.loginReducer);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace/>;
  } else {
    return <Navigate to='/home' replace />
  }

  // return children;
}

export default Auth