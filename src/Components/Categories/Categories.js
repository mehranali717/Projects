import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const Categoriestag = styled.span`
display:flex;
justify-content:space-between;
width:200px;
width:250px;
padding:12px 30px;
font-weight:500;
font-size:14px;
background-color:#0989ff;
color:#fff;
cursor:pointer;
transition:0.6s;
&:hover {
    background-color:#010f1c;
}
`
const Categories =({title , icon})=>{
    return <Categoriestag>{title}<FontAwesomeIcon icon ={icon}/></Categoriestag>
}
export default Categories;