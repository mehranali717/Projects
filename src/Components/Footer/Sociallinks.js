import Logo from "../Logo/Logo";
import logo from "../../Assets/Images/logo.png";
import styled from "styled-components";
const Sociallinkswrapper = styled.div`
display:flex;
flex-direction:column;
align-items:start;
max-width:24%;
`
const Discreption = styled.p`
padding-top:20px;
color:#010f1c;
font-size: 18px;
font-weight: 400;
line-height: 1.44;
`
const Sociallinks =()=>{
    return <Sociallinkswrapper>
            <Logo logo={logo}/>
            <Discreption>
                We are a team of designers and developers that create high quality WordPress
            </Discreption>
    </Sociallinkswrapper>
}
export default Sociallinks;