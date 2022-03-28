import React, { useState } from "react";

const Search = (props) => {
  const { searching,data } = props;
  const [search, setSearch] = useState(data);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const searchFun = () => {
    searching(search)
  };
  return (
    <>
      <div className="container mt-5">
        <input
          className="form-control"
          type="text"
          value={search}
          placeholder="Search..."
          size="30%"
          onChange={(e) => onSearchChange(e)}
        />
        <button onClick={() =>searchFun()} className="btn btn-warning ">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
