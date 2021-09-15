import React, { useState } from 'react'
import './App.css'
import Tarefas from './componentes/Tarefas';


const App = () => {
    const [tarefas, MudarMensagem] = useState([
        {
            id: "1",  
            titulo: "Estudar Programação",
            completo: false,
        },

        {
            id: "2",  
            titulo: "Ler Livros",
            completo: true,
        },
    ]);

    return(
      <>
        <div className = "container">
          <Tarefas tarefas = {tarefas}/>
        </div>
      </>
    )
}

export default App;