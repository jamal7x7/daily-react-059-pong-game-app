import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Pong game </h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>
    

     

  </div>
)

class PongGameApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
  

  }

  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <PongGameApp />

  </div>
)

export default App

