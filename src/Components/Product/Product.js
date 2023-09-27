import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Imagewrapper = styled.button`
  border:2px solid #02f2ea;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
  background: radial-gradient(95.56% 95.56% at 50% 50%, #fff 0, #bddeff 100%);
  overflow: hidden;
  cursor: pointer;
  &>:hover {
    transform: scale(1.2);
  }
`;
const Thumbnail = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Productouter = styled.div`
display:flex;
justify-content:space-between;
padding:30px 0px;
`
const Title = styled.h3`
color:#010f1c;
font-weght:500;
font-size:20px;
padding-bottom:10px;
`
const Image = styled.img`
width:50%;
height:50%;
transition:0.6s;
`
const Span = styled.span`
color:#55585b;
font-size:14px;
font-weight:400;
`
const Product =({products})=>{
 const navigate = useNavigate()
  const onClick =(item)=>{
    navigate("/productDetail",{
			state:{
				item:item
			}
		})
  }
    return <Productouter> {products.map((item, index)=>{return item.id===14 || <Thumbnail key={index}>
                <Imagewrapper onClick={()=>onClick(item)}><Image src={item.image} alt="some product"/></Imagewrapper>
                <Title>{item.title.slice(0,12)}</Title>
                <Span>3 products</Span>
            </Thumbnail>})}
    </Productouter>
}
export default Product;