import React from 'react'

function Button(props) //O botão recebe os parâmetros da ação dele
{
    const {name, onClick} = props //recebe o nome do botão e depois o nome da função através do props

    return(<button onClick = {onClick}>{name}</button>) 
}

export default Button 