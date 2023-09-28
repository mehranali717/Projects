import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navlist = styled.ul`
    display:flex;
    justify-content:space-between;
`
const Nav = styled.nav`
width:500px;
padding:0px 20px;
`
const Listitem = styled.li `
color:#010f1c;
font-size:14px;
font-weight:500;
transition:0.6s;
cursor:pointer;
text-transform:capitalize;
&:hover {
    color:#007aff;
}
`
const Navbar =({nawItems})=>{
    return <Nav>
                <Navlist>{nawItems.map((item , index)=><Link to={item.title}  key={index}>
                <Listitem>{item.title}{(item.title!=="coupons" && item.title!=="contact")
                &&<FontAwesomeIcon icon={item.icon}/>}</Listitem> </Link>)}</Navlist>
    </Nav>
}
export default Navbar;