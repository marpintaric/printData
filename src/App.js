import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom';
import './App.css'
import Header from './componets/Header';
import InputData from './componets/InputData'
import family from './componets/family'
import printData from './componets/printData'
import Data from './podaci'

class App extends Component {
  
  componentDidMount (){
    localStorage.setItem("podaci", JSON.stringify(Data.podaci))
  }
  
  render() { 
    return (

       <div className="App">
       <Header />
       <Switch>

        <Route exact path='/InputData' component={InputData}/>
        <Route exact path='/family' component={family}/>
        <Route exact to='/printData' component={printData}/>
       </Switch>
       </div>

    
    );
  }
}

export default App;
