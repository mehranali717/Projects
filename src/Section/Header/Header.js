import {Categories, Cart, Logo, Navbar } from "../../Components";
import styled from "styled-components";
import logo from "../../Assets/Images/logo.png"
const Headertag = styled.header``;
const Container = styled.div`
margin:auto;
width:1140px;
display:flex;
align-items:center;
`;
const Headertop = styled.div`
padding:15px 0px 23px;
border-bottom:1px solid rgba(1,15,28,.1);
& ${Container} {
    justify-content: space-between;
}
`;
const Headerottom = styled.div``;
const Header =()=>{
    const Icons = [
        {icon:"cart-shopping"},
    ]
    const nawItems = [
        {title:"home" ,  icon:"chevron-down"},
        {title:"shop",  icon:"chevron-down"},
        {title:"products",  icon:"chevron-down"},
        {title:"coupons",  icon:"chevron-down"},
        {title:"blog",  icon:"chevron-down"},
        {title:"contact",  icon:"chevron-down"}
    ];
    return <Headertag>
            <Headertop>
                <Container>
                        <Logo logo={logo}/>
                        <Cart icon={Icons}/>
                </Container>
            </Headertop>
            <Headerottom>
                    <Container>
                        <Categories title="All Categories" icon="chevron-down"/>
                        <Navbar nawItems={nawItems}/>
                    </Container>
            </Headerottom>
    </Headertag>
}
export default Header;