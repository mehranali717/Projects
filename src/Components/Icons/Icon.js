import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const IconWrapper = styled.div`
width:60px;
display:flex;
justify-content:space-between;
color : #2b2f32;
transition:0.6s;
& > :hover {
    color:#007aff;
 }
}
`
const Icon = ({icon})=>{
    return <IconWrapper>{icon.map((icon , index)=><FontAwesomeIcon icon={icon.icon} key={index}/>)}</IconWrapper>
}
export default Icon