import { Component } from "react";
import { Button, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';

class ProductList extends Component {
    state = {
      products: []
    };
  
    async componentDidMount() {
      const response = await fetch('/product');
      const body = await response.json();
      this.setState({products: body});
    }
  
    render() {
      const {products} = this.state;
      return (
          <div className="App">
            <AppNavbar/>
            <header className="App-header">
              <div className="App-intro">
                <h2>Produkte</h2>
                <ButtonGroup vertical>
                {products.map(product => <Button size="lg" tag={Link} to={"/product/" + product.id}>{product.name}</Button>
                    
                )}
                </ButtonGroup>
              </div>
            </header>
          </div>
      );
    }
  }
  export default ProductList;