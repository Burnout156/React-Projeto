import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../css/App.css';

function FirstJSX() 
{
    return(
        <div>
            <h1>Fala Bro</h1>
            
        </div>
          )  
}

class Operators extends Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            relogio: 1000,
            nome: 'rolex'
        }
    }
    componentDidMount() //é uma função interna do react que muda o estado depois de um certo tempo
    {
        window.setTimeout(() => 
        {
            this.setState
            ({
                nome: 'sola',
                relogio: 2000
            })
        }, 3000) 
    }

    ChangeClock = () => 
    {
        this.setState
        ({
            nome: 'armani',
        })
    }

    render()
    {
        const {relogio, nome} = this.state /* aqui é para dizer que o estado recebe os valores setados no construtor para que se torne unico para cada pc*/

        return(
            <div className = "Test">
                <h1>{relogio}</h1>
                <button onClick = {() => this.ChangeClock()}><h1>{nome}</h1></button>
                {FirstJSX()}
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Operators/>, rootElement)

export default Operators
 