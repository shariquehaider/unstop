
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Validate({children} : {children : ReactNode}) {
  const { isAuthenticated } = useSelector((state:any) => state.loginReducer);
  // const something = useSelector(state => state);
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace/>;
  } 

  return children;
}

export default Validate;