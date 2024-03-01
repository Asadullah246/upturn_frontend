import React from 'react';

const SearchPopUp = () => {
    return (
        <div className="search-popup">
          <button className="close-search style-two">
            <span className="flaticon-multiply" />
          </button>
          <button className="close-search">
            <span className="fa fa-arrow-up" />
          </button>
          <form
            method="post"
            action="#"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search Here"
                required=""
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div> 
          </form>
        </div>
    );
};

export default SearchPopUp;
