import React from 'react'

const Greet = props => 
{ 
return ( 
        <div> {/*essa div é para deixar ter mais de 1 retorno de linha html*/}
            <h1>Oi {props.name} {props.heroName}</h1> {/*o props name é pegando o parâmetro passado na página inicial html*/}  
            {props.children} {/*o children é para exibir os componentes filhos na página que serão executados*/}                                  
        </div>
       ) 
}
 
export default Greet /*está exportando a função Greet */