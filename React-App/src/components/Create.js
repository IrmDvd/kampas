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
      qty: '',
	    height: '',
	    weight: '',
	    length: '',
	    width: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { sku, qty, height, weight, length, width } = this.state;

    axios.post('/http://localhost:8080/product', { sku,qty,height,weight,length,width })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { sku, qty, height, weight, length, width } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Create Product
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Product List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="sku">SKU:</label>
                <input type="text" class="form-control" name="sku" value={sku} onChange={this.onChange} placeholder="sku" />
              </div>
              <div class="form-group">
                <label for="qty">QTY:</label>
                <input type="number"  class="form-control" name="qty" value={qty} onChange={this.onChange} placeholder="qty" />
              </div>
              <div class="form-group">
                <label for="height">Height:</label>
                <input type="number" step="0.01" class="form-control" name="height" value={height} onChange={this.onChange} placeholder="height" />
              </div>
              <div class="form-group">
                <label for="weight">Weight:</label>
                <input type="number" step="0.01" class="form-control" name="weight" value={weight} onChange={this.onChange} placeholder="weight" />
              </div>
              <div class="form-group">
                <label for="length">Length:</label>
                <input type="number" step="0.01" class="form-control" name="length" value={length} onChange={this.onChange} placeholder="length" />
              </div>
              <div class="form-group">
                <label for="width">Width:</label>
                <input type="number" step="0.01" class="form-control" name="width" value={width} onChange={this.onChange} placeholder="width" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;