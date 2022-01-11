import { Component } from "react";
import Mehrwertsteuer from "./Mehrwertsteuer";
import AppNavbar from './AppNavbar';

class Calculator extends Component {
    state = {
      price: 1,
    };
    
    handleChange(event) {
        this.setState({price: event.currentTarget.value});
    }
  
    render() {
      return (
          <div className="App">
            <AppNavbar/>
            <header className="App-header">
              <div className="App-intro">
                <h2>Mehrwertsteuerrechner</h2>
                <input id="price" type="number" min={1} defaultValue={1} onChange={event => this.handleChange(event)} /><br></br>
                
                <Mehrwertsteuer price={this.state.price}></Mehrwertsteuer>
              </div>
            </header>
          </div>
      );
    }
    
  }

  
  export default Calculator;