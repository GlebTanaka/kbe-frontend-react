import { Component } from "react";
import AppNavbar from "./AppNavbar";

class DetailedProduct extends Component {
    constructor(props){
        super(props);
    }

    state = {
        product: []
    };

    async componentDidMount() {
      const response = await fetch('http://localhost:8082/api/v1/gateway/product/' + this.props.match.params.id);
      const body = await response.json();
      this.setState({product: body});
    }

    render() {
      const {product} = this.state;
      return (
          <div className="App">
            <AppNavbar/>
            <header className="App-header">
              <div className="App-intro">
                <h2>{product.name}</h2>
                <table>
                    <tr>
                        <td>Beschreibung:</td>
                        <td>{product.description}</td>
                    </tr>
                    <tr>
                        <td>Größe:</td>
                        <td>{product.size}</td>
                    </tr>
                    <tr>
                        <td>Farbe:</td>
                        <td>{product.color}</td>
                    </tr>
                    <tr>
                        <td>Preis (inclusive Mehrwertsteuer):</td>
                        <td>{product.price + product.mehrwertsteuer + "€"}</td>
                    </tr>

                    <tr>
                        <td>Adresse:</td>
                        <td>{product.formattedAddress}</td>
                    </tr>
                    <tr>
                        <td>Menge:</td>
                        <td>{product.amount}</td>
                    </tr>
                    <tr>
                        <td>Ort:</td>
                        <td>{product.place}</td>
                    </tr>
                    <tr>
                        <td>Liefer Zeit:</td>
                        <td>{product.deliveryTime}</td>
                    </tr>
                    <tr>
                        <td>Liefer Datum:</td>
                        <td>{product.deliveryDate}</td>
                    </tr>

                </table>

              </div>
            </header>
          </div>
      );
    }
  }
  export default DetailedProduct;
