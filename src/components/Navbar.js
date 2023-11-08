import { useState,useContext } from "react";
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom"
import { userContext } from '../userContext'
import axios from "axios";

function Navbar(){
    const {user,setUser} = useContext(userContext)
    const [clicked,setClicked]= useState(false)
    const handleClick = () =>{
        setClicked(prev=>!prev)
    }
    const handleLogout = (e)=>{
        e.preventDefault()
        axios.post("https://summit-seekers-backend.vercel.app/api/users/logout",{},{withCredentials:true})
        .then(({data})=>setUser(null))
        .catch(err=>console.error(err)) 
    }
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SummitSeekers</h1>

                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
              
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}</Link>
                        </li>   
                        );
                    })}
                    {
                        !user ? <Link to={"/register"}><button>Sign Up</button></Link> : <button onClick={handleLogout}>{user.name}</button>
                    }
                </ul>
            </nav>
        )
}

export default Navbar;