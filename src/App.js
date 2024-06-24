
import Cards from './Components/Cards/Cards';
import TodoForm from './Components/Form/TodoForm';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: 'orange', padding: '5px'}}>
        <h1 style={{textAlign: 'center'}}>TODO TRACKER</h1>
      </div>
      <Cards />
      <TodoForm />
    </div>
  );
}

export default App;
