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
const Footer =({footerlist})=>{
    return <Footerwrapper>
                <Container>
                    <Sociallinks/>
                   {footerlist.map((listItem , index)=><Footerlist footerlist={listItem} key={index}/>) }
                </Container>
    </Footerwrapper>
}
export default Footer