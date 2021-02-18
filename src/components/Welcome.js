import React, {Component} from 'react'

class Welcome extends Component
{
    render()
    {
        return <h1>Sejam Bem vindo {this.props.name} {this.props.heroName}</h1> /*exemplo de como pegar um parâmetro com props e inserir no texto html */
    }  
}

export default Welcome