import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import UndoRedo from './containers/UndoRedo'




function App() {
  return (
    <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer/>
    <UndoRedo />


      

    </div>
  );
}

export default App;
