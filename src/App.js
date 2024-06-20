import Login from "./Login";
import Users from "./Users";
import UserCard from "./Atoms/UserCard";


const App = () =>{
  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log({baseUrl})
  return(
    <div>
      <Login/>
      <Users/>
      <UserCard/>
    </div>
  )
}

export default App
