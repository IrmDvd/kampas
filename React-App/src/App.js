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
      searchName:'',
      searchBarcode: '',
      searchQty: '',
      searchWeight: '',
      searchHeight: '',
      searchLength: '',
      searchWidth: '',
      searchDate: ''
    }
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
updateSearchName (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchName: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchQty (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchQty: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchWeight (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchWeight: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchHeight (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchHeight: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchLength (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchLength: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchWidth (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchWidth: event.target.value.substr(0,8)});
                                                              
 }

 updateSearchDate (event) {
  // alert(event.target.value.substr(0,8));
    this.setState({searchDate: event.target.value.substr(0,8)});
                                                              
 }

  render() {

    const filteredProducts = this.state.products.filter(products => {
      const queryId = this.state.searchId;
      const queryName = this.state.searchName;
      const querySku = this.state.searchSku;
      const queryBarcode = this.state.searchBarcode;
      const queryQty = this.state.searchQty;
      const queryWeight = this.state.searchWeight;
      const queryHeight = this.state.searchHeight;
      const queryLength = this.state.searchLength;
      const queryWidth = this.state.searchWidth;
      const queryDate = this.state.searchDate;
     return (

        products.idProduct.indexOf(queryId) >= 0 &&
        products.sku.toLowerCase().indexOf(querySku.toLowerCase()) >= 0 &&
        products.barcode.indexOf(queryBarcode) >= 0 &&  
        products.name.toLowerCase().indexOf(queryName.toLowerCase()) >= 0 &&
        products.qty.indexOf(queryQty) >= 0 &&
        products.weight.indexOf(queryWeight) >= 0 &&
        products.height.indexOf(queryHeight) >= 0 &&
        products.length.indexOf(queryLength) >= 0 &&
        products.width.indexOf(queryWidth) >= 0 &&
        products.dt.indexOf(queryDate) >= 0 
      )
    });
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
                    <input type="text" className="form-control" name="name" 
                    value={this.state.searchName} onChange={this.updateSearchName.bind(this)} 
                    placeholder="name" />
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
                    <input type="number" className="form-control" name="qty" 
                    value={this.state.searchQty} onChange={this.updateSearchQty.bind(this)} 
                    placeholder="qty"/>
              </div>
                </div>
              </th>   
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="weight" 
                    value={this.state.searchWeight} onChange={this.updateSearchWeight.bind(this)} 
                    placeholder="weight"/>
              </div>
                </div>
              </th>
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="height" 
                    value={this.state.searchHeight} onChange={this.updateSearchHeight.bind(this)} 
                    placeholder="height"/>
              </div>
                </div>
              </th>  
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="length" 
                    value={this.state.searchLength} onChange={this.updateSearchLength.bind(this)} 
                    placeholder="length"/>
              </div>
                </div>
              </th>   
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="length" 
                    value={this.state.searchWidth} onChange={this.updateSearchWidth.bind(this)} 
                    placeholder="width"/>
              </div>
                </div>
              </th>    
              <th>
                <div className="form-group">
               <div className="search-panel d-flex">          
                    <input type="text" className="form-control" name="date" 
                    value={this.state.searchDate} onChange={this.updateSearchDate.bind(this)} 
                    placeholer="date"/>
              </div>
                </div>
              </th>                       
                </tr>
                <tr>
                  <th>id</th>
                  <th>sku</th>
                  <th>name</th>
                  <th>barcode</th>
                  <th>qty</th>
                  <th>weight</th>
                  <th>height</th>
                  <th>length</th>
                  <th>width</th>
                  <th>Date Created</th>

                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(c =>
                  <tr>
                    <td><Link to={`/show/${c.idProduct}`}>{c.idProduct}</Link></td>
                    <td>{c.sku}</td>
                    <td>{c.name}</td>
                    <td>{c.barcode}</td>
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