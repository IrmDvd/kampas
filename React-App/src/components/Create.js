import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Create extends Component {
  constructor() {
    super();
    this.state = {
      idProduct: '',  
      sku: '',
      barcode: '',
      qty: ''     
    };
  }

  componentDidMount() {
    

    axios.get('http://localhost:8080/product/ + idProduct')
    .then(res => {
      this.setState({ product: res.data });
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    // this.setState({[e.target.name] : e.target.value });
    this.setState(state);
  }
  onSubmit = e => {
    
  
     const{ sku, barcode, qty} = this.state; 
  
    axios.post('http://localhost:8080/product', { sku,barcode, qty})
      .then((result) => {
        result.props.history.push("/")
      })

};
render() {
  const { sku, barcode, qty } = this.state;
  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Product
          </h3>
        </div>
        <div className="panel-body">
          <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Product List</Link></h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="sku">SKU:</label>
              <input type="text" className="form-control" name="sku" value={sku} onChange={this.onChange} placeholder="sku" />
            </div>
            <div className="form-group">
              <label htmlFor="barcode">Barcode:</label>
              <input type="number"  className="form-control" name="barcode" value={barcode} onChange={this.onChange} placeholder="barcode" />
            </div>
            <div className="form-group">
              <label htmlFor="qty">QTY:</label>
              <input type="number"  className="form-control" name="qty" value={qty} onChange={this.onChange} placeholder="qty" />
            </div>
             <button onClick={e => this.onSubmit(e)}className="btn btn-default">Submit</button>
             
          </form>
        </div>
      </div>
    </div>
  );
}
}
export default Create;