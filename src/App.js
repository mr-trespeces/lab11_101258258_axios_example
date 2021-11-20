import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './PersonList';

function App() {
  return (
    <div>
      <h1 className="App" id="header">User List</h1>
      <PersonList/>
    </div>
  );
}

export default App;
