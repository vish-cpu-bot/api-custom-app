import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Search from './search'
import SearchHoc from './searchHoc'
import { AppState } from './store'

const Todo = ({searchedData}) => {
  console.log("propssss todo",props)
  const[tododata,setToDoData]=useState([])
  // const[searchData,setSearchData] = useState('')
  const {state:{toDoState},actions:{dispatchToDo}} = useContext(AppState)
useEffect(()=>{
  const toDoFun= async()=>{
    try{
      dispatchToDo({type:"ONTODO_REQUEST"})
      let response= await axios.get("https://jsonplaceholder.typicode.com/posts")
      let res=response?.data
      setToDoData(res)
      dispatchToDo({type:"ONTODO_SUCCESS",payload:res})
    }catch(e){
      dispatchToDo({type:"ONTODO_ERROR",payload:e})
    }
  }
toDoFun()
},[]);
const handleSearch =(data)=>{
return setSearchData(data)
}
  return (
    <div className="container mt-5">
      <h3> {props.name}</h3>
       {/* <div className="mt-5">
              <Search data={searchData} searching={handleSearch}/>
            </div> */}
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Body</th>
              <th scope="col">Title</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {tododata?.filter((val)=>{
               if(val?.title.toLowerCase().includes(searchedData.toLowerCase()))   {
                 return true
               }  else{
                 return false
               }
            }).map((item, i) => (
              <tr>
                <th scope="row">{item?.id}</th>
                <td>{item?.body}</td>
                <td>{item?.title}</td>
                <td>{item?.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default SearchHoc(Todo)