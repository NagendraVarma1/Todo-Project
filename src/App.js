
import Cards from './Components/Cards/Cards';
import TodoForm from './Components/Form/TodoForm';
import List from './Components/List/List';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: 'orange', padding: '5px'}}>
        <h1 style={{textAlign: 'center'}}>TODO TRACKER</h1>
      </div>
      {/* has to add conditional rendering depending on the path. */}
      <Cards />
      <TodoForm />
      <List />
    </div>
  );
}

export default App;
