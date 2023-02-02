import { Component } from "react";
import "./NavbarStyles.css";
import logo from "../img/logo.jpg"
import {MenuItems} from "./MenuItems"
import {Link} from "react-router-dom";

class Navbar extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <div classname="brand">
			<Link to="/">
				<img className="logo" src={logo}/>
			</Link>
			<h9 className="number">𝘾𝘼𝙇𝙇 𝙐𝙎 𝙏𝙊𝘿𝘼𝙔 ! <a href="tel:(786)-296-4730">(786)-296-4730</a><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝙁𝙧𝙚𝙚 𝙀𝙨𝙩𝙞𝙢𝙖𝙩𝙚𝙨 !</h9>

			</div>
            <br></br>
            <div className="options justify-content-end">
                 <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars "}></i>
              
                 </div>
                 <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=> {
                        return(
                            <li key={index}>
                            <Link className={item.cName}
                            to={item.url} onClick="document.getElementByID('middle').scrollIntoView();">
                       {item.title}
                          </Link>
                          </li>

                        )
                    })}                
                 </ul>
                 </div>
            </nav>
           
        )
    }
}
export default Navbar