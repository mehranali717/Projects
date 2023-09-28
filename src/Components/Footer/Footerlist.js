import styled from "styled-components";
const Footerlistwrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Footerlinks = styled.a`
text-decoration:none;
color: #55585b;
font-size: 14px;
font-weight: 500;
transition:0.6s;
margin-bottom:7px;
&:hover{
    color:#007aff;
}
`
const Footerlist =({footerlist})=>{
    return <Footerlistwrapper>
            <h3>{footerlist.title}</h3>
            <ul>
                {footerlist.subtitle.map((subtitle , index)=><li key={index}><Footerlinks href="#">{subtitle.subtitle}</Footerlinks></li>)}
            </ul>
    </Footerlistwrapper>
}
export default Footerlist;