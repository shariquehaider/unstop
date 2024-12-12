
import './App.css';
import Login from './screens/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginAction } from './components/LoginComponent';
import Dashboard from './screens/Dashboard';
import Auth from './screens/Auth';
import { userDetails } from './components/Card';
import Validate from './screens/Validate';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Auth></Auth>,
    },
    {
      path: '/auth/login',
      element: <Login/>,
      action: loginAction
    },
    {
      path: '/home',
      element: <Validate><Dashboard/></Validate>,
      loader: userDetails
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
