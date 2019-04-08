import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }

  componentDidMount() {
    axios.get('/product/'+this.props.match.params.idProduct)
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      });
  }

  onChange = (e) => {
    const state = this.state.products
    state[e.target.name] = e.target.value;
    this.setState({products:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { sku, qty} = this.state.contact;

    axios.put('http://localhost:8080/product'+this.props.match.params.id, { sku, qty})
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Product
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.products.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Back to Product details</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="sku">SKU:</label>
                <input type="text" class="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="sku" />
              </div>
              <div class="form-group">
                <label for="qty">Address:</label>
                <input type="text" class="form-control" name="qty" value={this.state.products.qty} onChange={this.onChange} placeholder="Address" />
              </div>
              <button type="submit" class="btn btn-default">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;