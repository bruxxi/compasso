import React from 'react'
import Router from './route/Router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () =>{
  return(
    <div className="AppContainer">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App;
