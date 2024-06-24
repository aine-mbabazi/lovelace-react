import Login from "./Login";
import Users from "./Users";
import './App.css'
import Modal from "./Modal";
import React from "react";
import { useState } from "react";
// export const Introduction = () =>{
//   return <h2>What is react?</h2>;
// }
const App=()=>{
  const [isLogIn, setIsLogIn] = useState(false);
  const [open, setOpen] = useState(false)
  const handleWhenClosed = () => {
    setOpen(false)
  }
  const handleWhenOpen = () => {
    setOpen(true)
  }
  const handleSuccess = ()=>{
  setIsLogIn(true)
  setOpen(false)
  }
return(
  <div>
  {!isLogIn ? (
    <>
    <h1 id="heading">Welcome to lovelace React App</h1>
    <img src="/Images/login.jpg" id="img" alt="image"/>
    <button type="button" onClick={handleWhenOpen} className="but" >Login</button>
    <Modal isOpen={open} onClose={handleWhenClosed}>
      <>
        <Login onLoginSuccess = {handleSuccess}/>
      </>
    </Modal>
    </>
  ):(
    <Users/>
  )
  }
  </div>
);
}
export default App;
