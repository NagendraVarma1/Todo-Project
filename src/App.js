
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoForm from './Components/Form/TodoForm';
import RootLayout from './Components/RootLayout/RootLayout';
import List from './Components/List/List';
import CompletedTodo from './Components/CompletedTodo/CompletedTodo';
import Trash from './Components/Trash/Trash';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <List />},
        {path: '/form', element: <TodoForm />},
        {path: '/completedTodo', element: <CompletedTodo />},
        {path: '/trash', element: <Trash />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
