
import { useState } from "react";
import  "./header.css";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";

const Header = ()=>{
const[toggle,setToggle]= useState(false);



return (
<header className="header">
<TopHeader  setToggle={setToggle}/>
<MiddleHeader />
<nav style={{left: toggle && "0"}} className="navbar">
    <div  className="navbar-close-icon">
<i onClick={()=>setToggle(false)} className="bi bi-x-lg"></i>

    </div>
<ul className="navbar-links">
  <li onClick={()=>setToggle(false)} className="navbar-link"> HOME</li>
  <li onClick={()=>setToggle(false)} className="navbar-link"> BAGS</li>
  <li onClick={()=>setToggle(false)} className="navbar-link">HATS</li>
  <li onClick={()=>setToggle(false)} className="navbar-link">NEW</li>
  
  
    
    </ul>   
</nav>

</header>
);

}
export default Header;
