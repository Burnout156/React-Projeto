import logo from './logo.svg';
import './css/App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Button from './components/Button'

function App() 
{
  return (
    <div className="App">
      {/* <Greet name = "Bruno" heroName = "Fortão"> 
        <Hello>
        </Hello>
      </Greet>
      <Greet name = "Guacirema" heroName = "Gordinha">
        <Hello>
        </Hello>
      </Greet>

      <Button onClick = {() => Soma(10, 1)} name = "Some"/> {/*primeiro passo a função e depois o nome do botão*/}


      {/* <MyComponent/>*/}
      {/*<Welcome/>*/}
      {/*<Hello/>*/}
      <Welcome name = "Bruno" heroName = "Fortão"/> {/*exemplo de como passar um parâmetro direto sem div */}
      <Welcome name = "Guacirema"/>
    </div>
  ); 
}

function Soma(a, b)
{
    alert(a + b);
}

export default App;
