import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
const Fontawesome = styled(FontAwesomeIcon)`
font-size:11px;
padding-left:3px;
`
const Navlink = styled(Link)`
display:inline-block;
text-decoration:none;
position: relative;
`
const Navbar =({nawItems})=>{
        const dropdownContent = [
            {blogItem:"Blog Standard", url:"blog"},
            {blogItem:"Blog Grid",url:"blog-grid"},
            {blogItem:"Blog List",url:"blog-list"},
            {blogItem:"Blog Details Full Width", url:"blog-detail"},
            {blogItem:"Blog Details", url:"blog-detail"},
        ]
    return <nav>
                <ul className="navList">{nawItems.map((item , index)=><Navlink to={item.title}  key={index}>
                <li className="listItems">{item.title}{(item.title!=="coupons" && item.title!=="contact")
                &&<Fontawesome icon={item.icon}/>}
                {item.title==="blog" && 
                <div className="dropdown">
                    <ul className="dropdownContent">
                        {dropdownContent.map((item, index)=><li key={index}><Navlink to={item.url}>{item.blogItem}</Navlink></li>)}
                    </ul>
                </div>
                }
                </li>               
                </Navlink>
                
                )}</ul>
    </nav>
}
export default Navbar;