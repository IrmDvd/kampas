import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/">Home</NavLink>
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/create">Create</NavLink> 
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/productList">Products</NavLink>
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/scaner">Scaner</NavLink>
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/in">in</NavLink>
          <NavLink className="nav-item nav-link active bg-light text-warning" to="/out">out</NavLink>
          <button className="btn btn-outline-warning my-2 my-sm-0 float-right" type="submit">Logout</button>
        </nav>
    );
};

export default Navigation;