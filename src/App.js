import './App.css';
import ListA from './class/List';
import ListB from './functional/List';

function App() {
  return (
    <div className="border">
        <div  className="border">
          <h1>Functional:</h1>
          <ListB />
        </div>
        <div  className="border">
        <h1>Class:</h1>
         <ListA />
        </div>
    </div>
  );
}

export default App;


