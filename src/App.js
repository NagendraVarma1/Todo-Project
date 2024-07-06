
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoForm from './Components/Form/TodoForm';
import RootLayout from './Components/RootLayout/RootLayout';
import List from './Components/List/List';
import CompletedTodo from './Components/CompletedTodo/CompletedTodo';
import Signin from './Components/SignIn/Signin';
import { useContext } from 'react';
import AuthContext from './Store/auth-context';
import SignUp from './Components/SignUp/SignUp';
// import Trash from './Components/Trash/Trash';

function App() {


  const authCtx = useContext(AuthContext)
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: authCtx.loggedIn ? <List /> : <Signin />},
        {path: '/form', element: authCtx.loggedIn ? <TodoForm /> : <Signin />},
        {path: '/completedTodo', element: authCtx.loggedIn ? <CompletedTodo /> : <Signin />},
        {path: '/signUp', element: <SignUp />}
        // {path: '/trash', element: <Trash />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
