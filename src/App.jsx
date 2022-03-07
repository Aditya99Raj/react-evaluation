import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter"
function App() {

  let data = [
    {item:"Books"},
    {item:"Pens"},
    {item:"Notebooks"},
    {item:"Inkpens"}
  ]
  return (
    <div className="items">
     
      <span>Books:
      {data.map((el)=> userComponent(el))}
      Books
      <Counter/>
      </span>
     
    {/* <button className="addBook">
        +
    </button> */}
    {/* <button className="remBook">
        -
    </button> */}
    <span className="totalBooks">1</span>

    
    </div>
  );
}

function userComponent({item}) {
return (
  
  <li>{item}</li>

)
}

export default App;
