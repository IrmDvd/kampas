import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {  
      products: [],
      searchId: '',
      searchSku:'',
      searchBarcode: '',
      searchQty: '',
      searchQtyTo: ''
    }
    //  this.searchQty = this.updateSearchQty.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/product')
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      });
  }

  updateSearchId (event) {
    // alert(event.target.value.substr(0,8));
      this.setState({searchId: event.target.value.substr(0,8)});
                                                                
   }

  updateSearch (event) {
    //alert(event.target.value.substr(0,8));
     this.setState({search: event.target.value.substr(0,10)});  // turetu paimti formos key name ir priristi konkrecia paieska
                                                               // this.setState([event.target.name]: event.target.value.substr(0,8)});
 }


updateSearchBarcode (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchBarcode: event.target.value.substr(0,13)});
                                                              
 }

updateSearchSku (event) {
 // alert(event.target.value.substr(0,8));
   this.setState({searchSku: event.target.value.substr(0,8)}); 
}

 updateSearchQty (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchQty: event.target.value.substr(0,8)});
                                                              
 }
 updateSearchQtyTo (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchQtyTo: event.target.value.substr(0,8)});
                                                              
 } 





  render() {

    const filteredProducts = this.state.products.filter(products => {
      const queryId = this.state.searchId;
      const queryName = this.state.searchName;
      const querySku = this.state.searchSku;
      const queryBarcode = this.state.searchBarcode;
      const queryQty = this.state.searchQty;
      const queryQtyTo = this.state.searchQtyTo;
     return (
    
        // products.idProduct.indexOf(queryId) >= 0 &&
        products.sku.toLowerCase().indexOf(querySku.toLowerCase()) >= 0 &&
        products.barcode.indexOf(queryBarcode) >= 0 &&
        products.qty >= queryQty 
        
        // products.name.toLowerCase().indexOf(queryName.toLowerCase()) >= 0
      )
    });
    return (

        <div className="container-fluid">
        <div className="panel panel-default">  
          <div className="panel-body">

          <button type="submit" className="btn btn-default">Search</button>


      <table className="table table-stripe">
              <thead>
          <tr>
                <th><div className="form-group">
              <div className="search-panel d-flex">          
                   <input type="number" className="form-control" name="idProduct" 
                    value={this.state.searchId} onChange={this.updateSearchId.bind(this)} 
                    placeholder="id" />
              </div>
                </div>
              </th>  
              <th><div className="form-group">
               <div className="search-panel d-flex">          
                   <input type="text" className="form-control" name="sku" 
                    value={this.state.searchSku} onChange={this.updateSearchSku.bind(this)} 
                    placeholder="sku" />
              </div>
                </div>
              </th>   
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="barcode" 
                    value={this.state.searchBarcode} onChange={this.updateSearchBarcode.bind(this)} 
                    placeholder="barcode"/>
              </div>
                </div>
              </th>   
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">
               <div className="row">          
                    <input type="text" className="form-control m-2" name="qty" 
                    value={this.state.searchQty} onChange={this.updateSearchQty.bind(this)} 
                    placeholder="qty"/>
                    <input type="text" className="form-control" name="qty" 
                    value={this.state.searchQtyTo} onChange={this.updateSearchQtyTo.bind(this)} 
                    placeholder="To:"/>
                    </div>
              </div>
                </div>
              </th>   
                </tr>
                <tr>
                  <th>id</th>
                  <th>sku</th>
                  <th>barcode</th>
                  <th>qty</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(c =>
                  <tr key={c.idProduct}>
                    <td key={1}><Link to={`/show/${c.idProduct}`}>{c.idProduct}</Link></td>
                    <td key={2}>{c.sku}</td>
                    <td key={3}>{c.barcode}</td>
                    <td key={4}>{c.qty}</td>
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
