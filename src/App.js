
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoForm from './Components/Form/TodoForm';
import RootLayout from './Components/RootLayout/RootLayout';
import List from './Components/List/List';
import CompletedTodo from './Components/CompletedTodo/CompletedTodo';
import Signin from './Components/SignIn/Signin';
// import Trash from './Components/Trash/Trash';

function App() {

  const email = localStorage.getItem('email')
  console.log(email)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: email ? <List /> : <Signin />},
        {path: '/form', element: email ? <TodoForm /> : <Signin />},
        {path: '/completedTodo', element: email ? <CompletedTodo /> : <Signin />},
        // {path: '/trash', element: <Trash />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
