import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {
        idProduct: '',  
        sku: '',
        barcode: '',
        qty: '' 
      }
    };
  }
  componentDidMount() {
    

    axios.get('http://localhost:8080/product/'+this.props.match.params.id)
    .then(res => {
      this.setState({ product: res.data });
      console.log(this.state.product);
    });
  }

  onChange = (e) => {
    // e.preventDefault();
    const state = this.state.product
    state[e.target.name] = e.target.value;
    // this.setState({product:state});
  }

  onSubmit = e => {
    e.preventDefault();
    const{ sku, barcode, qty} = this.state; 
   axios.put('http://localhost:8080/product + id', { sku,barcode, qty})
     .then((result) => {
       result.props.history.push("/")
     })
    };


  render() {

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Product
            </h3>
          </div>

          <div className="panel-body">

            <h4><Link to={"/"}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Back to Product details</Link></h4>
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
              <div className="row m-2">Product id: {this.state.product.idProduct}</div>
                <label htmlFor="sku">Sku:</label>
                <input type="text" className="form-control" name="sku" onChange={this.onChange} placeholder={this.state.product.sku}/>
              </div>
              <div className="form-group">
                <label htmlFor="sku">Barcode:</label>
                <input type="text" className="form-control" name="barcode" onChange={this.onChange} placeholder={this.state.product.barcode}/>
              </div>

              <div className="form-group">
                <label htmlFor="qty">Qty:</label>
                <input type="text" className="form-control" name="qty" onChange={this.onChange} placeholder={this.state.product.qty} />
              </div>
              <button type="submit" className="btn btn-default">Update</button>
              {/* <button onClick={e => this.onSubmit(e)}className="btn btn-default">Submit</button> */}
              {/* <button onClick={this.delete.bind(this, this.state.product.idProduct)} className="btn btn-danger">Delete</button> */}

            </form>
            <div className="panel-body">
            <h4>Product details</h4>
            <dl>               
            <dt>id: {this.state.product.idProduct}</dt>
            <dt>SKU: {this.state.product.sku}</dt>
            <dt>Barcode: {this.state.product.barcode}</dt>
            <dt>QTY: {this.state.product.qty}</dt>
            </dl>
          </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Edit;
