import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import App from '../App'; 

const Scaner = () => {
    return (
        <div>
            <div>
            <input type="text" className="form-control" name="barcode"  
                    placeholder="barcode"/>
            </div>
            <table className="table table-stripe">
  
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
            </table>
        </div>
    );
};

export default Scaner;