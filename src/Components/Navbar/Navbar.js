import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navlist = styled.ul`
    display:flex;
    justify-content:space-between;
`
const Nav = styled.nav`
width:550px;
padding:0px 20px;
`
const Listitem = styled.li `
color:#010f1c;
font-size:14px;
font-weight:500;
letter-spacing:1px;
transition:0.6s;
cursor:pointer;
text-transform:capitalize;
&:hover {
    color:#007aff;
}
`
const Fontawesome = styled(FontAwesomeIcon)`
font-size:11px;
padding-left:3px;
`
const Navbar =({nawItems})=>{
    return <Nav>
                <Navlist>{nawItems.map((item , index)=><Link to={item.title}  key={index}>
                <Listitem>{item.title}{(item.title!=="coupons" && item.title!=="contact")
                &&<Fontawesome icon={item.icon}/>}</Listitem> </Link>)}</Navlist>
    </Nav>
}
export default Navbar;