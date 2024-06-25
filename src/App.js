
import Cards from './Components/Cards/Cards';
import TodoForm from './Components/Form/TodoForm';
import Header from './Components/Header/Header';
// import List from './Components/List/List';

function App() {
  return (
    <div>
      <Header />
      {/* has to add conditional rendering depending on the path. */}
      <Cards />
      <TodoForm />
      {/* <List /> */}
    </div>
  );
}

export default App;
