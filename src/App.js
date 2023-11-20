import {useState,useEffect} from "react"
import {userContext} from "./userContext"
import './App.css';
import axios from "axios"
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Treks from "./routes/Treks";
import Contact from "./routes/Contact";
import RentGear from "./routes/RentGear";
import Gallery from "./routes/Gallery";
import Payment from "./routes/Payment";
import Login from "./components/Login"
import Register from "./components/Register"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    if(!user){
      axios.get("http://localhost:5000/api/users/profile",{withCredentials:true}) 
      .then(({data})=>{
        setUser(data)
      })
      .catch(err=>console.error(err))}
    }
  ,[])
  return (
    <div className="App">
      <userContext.Provider value={{user,setUser}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/treks" element={<Treks/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/rentgear" element={<RentGear/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </ userContext.Provider>
    </div>
  );
}


