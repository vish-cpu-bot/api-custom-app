import Login from "./login";
import SignUp from "./Signup";
import { Route, Routes } from "react-router-dom";
import AppStoreProvider from "./store";
import Profile from "./profile";
import Todo from "./todo";
import SearchHoc from "./searchHoc";

const test = () => {
  return <>Hello test hoc  component</>;
};

const Test1 =SearchHoc(test)
function App() {
  return (
    <AppStoreProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<Todo name={'Vishal'} />} />
      </Routes>
    </AppStoreProvider>
  );
}
export default App;
