import React from 'react';
import Card from "../../components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <div className="container">
      
      <form>
        <div class="col-sm-8">
            <div className="form-group">
                <input
                onChange=""
                name="search"
                 type="text"
                 className="form-control"
                 placeholder="Enter a book title to begin your search"
                 id="search"/>
                 
            </div>
            <div class="col-sm-2">
                <button onClick="" className="btn btn-dark mt-3 mb-5">
                 Search
                </button>
            </div>
        </div>
    </form>
    </div>
        
        
         
           
         
    )
};

export default Search;