import React, { useState } from "react";
import Search from "./search";

const SearchHoc = (WrappedComponent) => {
 
  const SearchList=()=>{
    const[searchedData,handleSearch] = useState('')
    return <>
    <Search  data={searchedData}  searching={handleSearch} />
         <WrappedComponent searchedData={searchedData} />
    </>;
  }
return SearchList
};

export default SearchHoc;
