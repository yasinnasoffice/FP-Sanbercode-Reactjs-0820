import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css"


// Class component Header
class Header extends Component {
    render () {
        return (
            <div style={{width : "1200px", margin: "0 auto", 
            background: "#20B2AA", border: "50px solid #ADD8E6"}}>
               
                <ul>
                    <li>Home</li>
                    <li>Profil</li>
               
                </ul>

                </div>
        )
    }
}

export default Header;

// import React, { useContext } from "react"
// import { Link } from "react-router-dom";
// import "./Nav.css"
// //import { ThemeContext } from "./ThemeContext";


// const Nav = () =>{
//   //const [theme] = useContext(ThemeContext)

//   return(
//     <nav style={{background: "dark" ? "navy" : ""}}>
//       <ul>
//         <li>
//           <Link to="/">Tugas 9</Link>
//         </li>
//         <li>
//           <Link to="/tugas10">Tugas 10</Link>
//         </li>

//         <li>
//           <Link to="/tugas11">Tugas 11</Link>
//         </li>
//         <li>
//           <Link to="/tugas12">Tugas 12</Link>
//         </li>
//         <li>
//           <Link to="/tugas13">Tugas 13</Link>
//         </li>
//         <li>
//           <Link to="/tugas14">Tugas 14</Link>
//         </li>
//         <li>
//           <Link to="/tugas15">Tugas 15</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Nav
