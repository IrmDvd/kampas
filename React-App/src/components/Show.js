import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    

    axios.get('http://localhost:8080/product/'+this.props.match.params.id)
    .then(res => {
      this.setState({ product: res.data });
      console.log(this.state.product);
    });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:8080/product/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
            <Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Back to Products</Link>
            </h3>
          </div>
          <div className="panel-body">
            <h4>Product details</h4>
            <dl>               
            <dt>id: {this.state.product.idProduct}</dt>
            <dt>SKU: {this.state.product.sku}</dt>
            <dt>QTY: {this.state.product.qty}</dt>
            <dt>Height: {this.state.product.height}</dt>
            <dt>Width: {this.state.product.width}</dt>
            <dt>Length: {this.state.product.length}</dt>
            <dt>Weight:{this.state.product.weight}</dt>
            <dt>Date Created: {this.state.product.dt}</dt>
            </dl>
            <Link to={`/edit/${this.state.product.idProduct}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.product.idProduct)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;