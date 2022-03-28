import React, { useContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { AppState } from "./store";
// import Search from "./search";
import SearchHoc from "./searchHoc";

const Profile = ({searchedData}) => {
  const {
    state: { signupState },
    actions: { dispatchSignup },
  } = useContext(AppState);

  const [profileData, setProfileData] = useState([]);
  // const [searchedData,setSearchedData]=useState("")
  useEffect(() => {
    const profileFun = async () => {
      try {
        dispatchSignup({ type: "ONPROFILE_REQUEST" });
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        let res = response?.data || [];
        setProfileData(res);
        dispatchSignup({ type: "ONPROFILE_SUCCESS", payload: res });
      } catch (e) {
        dispatchSignup({ type: "ONPROFILE_ERROR", payload: e });
      }
    };
    profileFun();
  }, []);
// const handleSearch=(data)=>{
//   setSearchedData(data)
// }
  return (
    <>
      <div className="container mt-5">
        {/* <div className="mt-5">
         <Search data={searchedData} searching={handleSearch} />
        </div> */}
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {profileData?.filter((val)=>{
               if(val?.username.toLowerCase().includes(searchedData.toLowerCase()))   {
                 return true
               }  else{
                 return false
               }
            }).map((item, i) => (
              <tr>
                <th scope="row">{item?.id}</th>
                <td>{item?.email}</td>
                <td>{item?.username}</td>
                <td>{item?.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchHoc(Profile);
