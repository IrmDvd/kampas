import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/product')
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      });
  }

  render() {
    return (

      
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-item nav-link active bg-light text-warning" href="">Home</a>
        <a class="nav-item nav-link active bg-light text-warning" href="/create">Create Product</a> 
        <button id="logout" type="button" class="btn btn-outline-secondary">Logout</button>
    </div>
</div>
</nav>
        <div className="panel panel-default">
   
          <div className="panel-body">
          <button type="submit" className="btn btn-default">Search</button>
            <table className="table table-stripe">
              <thead>
                <tr>
                <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="id" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="sku" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="qty" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="weight" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="heigth" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="length" />
              </div></th>
                  <th><div className="form-group">
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="width" />
              </div></th>
                  <th><div className="form-group">            
                <input type="text" className="form-control" name="sku" value={this.state.products.sku} onChange={this.onChange} placeholder="Date" />
              </div></th>
                </tr>
                <tr>
                  <th>id</th>
                  <th>sku</th>
                  <th>qty</th>
                  <th>weight</th>
                  <th>height</th>
                  <th>length</th>
                  <th>width</th>
                  <th>Date Created</th>

                </tr>
              </thead>
              <tbody>
                {this.state.products.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.idProduct}`}>{c.idProduct}</Link></td>
                    <td>{c.sku}</td>
                    <td>{c.qty}</td>
                    <td>{c.weight} <span>kg</span></td>
                    <td>{c.height} <span>cm</span></td>
                    <td>{c.length} <span>cm</span></td>
                    <td>{c.width} <span>cm</span></td>
                    <td>{c.dt}</td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
            <nav aria-label="Page navigation">
  <ul className="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;