import styled from "styled-components";
import {Footerlist, Sociallinks } from "../../Components";
const Footerwrapper = styled.div`
display:flex;
padding-top:30px;
`
const Container = styled.div`
margin:auto;
width:1140px;
display:flex;
justify-content:space-between;
`;
const Footer =()=>{
    const accountSubtitles = [
        {subtitle:"Track orders"},
        {subtitle:"Shipping"},
        {subtitle:"Wishlist"},
        {subtitle:"My Account"},
        {subtitle:"Order History"},
        {subtitle:"Returns"},
    ]
    const informationSubtitles = [
        {subtitle:"Our Story"},
        {subtitle:"Careers"},
        {subtitle:"Privacy Policy"},
        {subtitle:"Terms & Conditions"},
        {subtitle:"Latest News"},
        {subtitle:"Contact Us"},
    ]
    const contactSubtitles = [
        {subtitle:"Got Questions? Call us"},
        {subtitle:"+670 413 90 762"},
        {subtitle:"shofy@support.com"},
        {subtitle:"79 Sleepy Hollow St"},
    ]
        const footerlist = [
            {title:"My Account",subtitle:accountSubtitles},
            {title:"Information",subtitle:informationSubtitles},
            {title:"Talk To Us",subtitle:contactSubtitles}
        ]
    return <Footerwrapper>
                <Container>
                    <Sociallinks/>
                   {footerlist.map((listItem , index)=><Footerlist footerlist={listItem} key={index}/>) }
                </Container>
    </Footerwrapper>
}
export default Footer