import { Component } from "react";
import {Label} from 'reactstrap';

class Mehrwertsteuer extends Component {
    constructor(props){
        super(props);
    }

    state = {
        mehrwertsteuer: [],
    };

    async componentDidMount() {
        const response = await fetch('/calculatemehrwertsteuer?preis=' + this.props.price);
        const body = await response.json();
        this.setState({mehrwertsteuer: body});
    }

    async componentDidUpdate(){
        const response = await fetch('/calculatemehrwertsteuer?preis=' + this.props.price);
        const body = await response.json();
        this.setState({mehrwertsteuer: body});
    }
  
    render() {
      return (

          <Label>Mehrwertsteuer: {this.state.mehrwertsteuer}</Label>

      );
    }
  }
  export default Mehrwertsteuer;