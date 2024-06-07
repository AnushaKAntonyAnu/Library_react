import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewallStudent from './components/ViewallStudent';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
      <ViewallStudent/>
    </div>
  );
}

export default App;
