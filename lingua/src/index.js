import React from 'react'
import ReactDOM from 'react-dom'

//stateless functional component
//always return JSX

function Greeting(){
  return<h4>Hey. I'm Masha. I'm a writer. nope. an author. bitch!</h4>;
}





ReactDOM.render(<Greeting/>, document.getElementById('root'));