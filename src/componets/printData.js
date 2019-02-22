import React, { Component } from 'react'


class printData extends Component {
    constructor(props){
      super(props);
      this.state = {
        podaci: [],
        ispisPodataka: false,
        family: null,
        ispisObjekta: false,
      }
  
      this.ispisPodatakaHandler = this.ispisPodatakaHandler.bind(this)
  
    }
    componentDidMount (){
     const podaci = localStorage.getItem('podaci')
     this.setState({podaci: podaci ? [...JSON.parse(podaci)] : []}, )
      //this.setState({ podaci: Data.podaci})
    }
    ispisPodatakaHandler = () => {
        let {ispisPodataka} = this.state
        this.setState({
          ispisPodataka: !ispisPodataka
          
        })
      }
  
     
  
  
    render() {
      const {podaci, ispisPodataka,} = this.state;
      return (
        <div className="App">
         
          <button onClick={this.ispisPodatakaHandler}>Ispis podaci</button>
            <ul>
              {ispisPodataka &&
                podaci.map(hit => {
               return <li key={hit.id}>
                <p>Ime: {hit.name}</p>
                <p>Prezime: {hit.lastName}</p>
                <p>Adresa: {hit.address}</p> <br />
              </li>})
              }
            </ul>
        
        </div>
      );
    }
  }
  
  export default printData;