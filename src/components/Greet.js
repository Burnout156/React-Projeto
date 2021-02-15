import React from 'react'

/*function Welcome()
{
    return <h1>Welcome to the site</h1>
}*/

const Greet = props => 
{
return (
    <div>
        <h1>Oi {props.name} a.k.a {props.heroName}</h1> 
        {props.children}
    </div>
       )
}

export default Greet