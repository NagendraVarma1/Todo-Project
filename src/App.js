
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoForm from './Components/Form/TodoForm';
import RootLayout from './Components/RootLayout/RootLayout';
import List from './Components/List/List';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/', element: <TodoForm />},
        {path: '/todoList', element: <List />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
