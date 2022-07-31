import axios from 'axios';
import React, { Component } from 'react'
import Product from './Product/Product';
class Products extends Component {
    state = {
        products:null
    }
    componentDidMount() {
    axios.get("data/data.json").then(res => {
        this.setState({products:res.data})
    })         
    }
  render() {
    return (
        <div style={{margin:'25px'}}>
            {this.state.products ? this.state.products.map(product => 
                <Product 
                title={product.title}
                id={product.id}
                img={product.img}
                key={product.id}
                />
            )
            :
            null
        }
        </div>
    )
  }
}
export default Products;