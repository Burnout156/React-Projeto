import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Button from './components/Button'

function App() 
{
  return (
    <div className="App">
      <Greet name = "Bruno" heroName = "Fortão">
        <p>
          This is a Child Props
        </p>
      </Greet>
      <Greet name = "Guacirema" heroName = "Gordinha">
        <button>Ação</button>
      </Greet>

      <Button onClick = {() => Soma(10, 1)} name = "Some"/>


      {/* <MyComponent/>*/}
      {/*<Welcome/>*/}
      {/*<Hello/>*/}
      <Welcome name = "Bruno" heroName = "Fortão"/>
      <Welcome name = "Guacirema"/>
    </div>
  );
}

function Soma(a, b)
{
    alert(a + b);
}

export default App;
