import styled from "styled-components";
import {useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../Redux/AddtToCartSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addtocart, increment, decrement } from "../../Redux/AddtToCartSlice";
const Imagewrapper = styled.div`
width:45%;
height:500px;
background-color:rgb(245, 246, 248);
display:flex;
align-items:center;
justify-content:center;
`
const Container = styled.div`
max-width:1140px;
margin:30px auto 0px;
display:flex;
justify-content:space-between;
`
const Image = styled.img`
width:50%;
height:50%;
`
const PDWrapper = styled.div`
width:45%;
`
const Title = styled.h2`
padding:10px 0px;
`
const Paragraph = styled.p`
padding:15px 0px;
`
const Statebadge = styled.span`
background-color:rgba(9,137,255,.06);
color:#0989ff;
display:inline-block;
padding:0px 10px;
`
const Subtitle =styled.span`
font-size:16px;
line-height:1;
color:#55585b;
`
const Ratingbadge = styled.span`
color:#55585b;
display:inline-block;
padding-left:20px;
`
const Pricing = styled.span`
color:#010f1c;
font-size:24px;
font-weight:500;
display:block;
margin-bottom:15px;
`
const Counter = styled.span`
height:40px;
width:180px;
background-color:#f3f5f6;
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 10px;
`
const Countbtn = styled(FontAwesomeIcon)`
border:none;
color:#010f1c;
font-size:15px;
font-weight:500;
cursor:pointer;
`
const Qty = styled.span`
color:#010f1c;
font-size:20px;
font-weight:500;
`
const AddToCart = styled.button`
border:1px solid #e0e2e3;
font-size:16px;
text-align:center;
width:100%;
cursor:pointer;
color:#010f1c;
padding:9px 30px;
font-weight:500;
transition:0.6s;
letter-spacing:2px;
&:hover {
    background-color:#010f1c;
    border:1px solid #010f1c;
    color:#fff;
}
`
const Bookorder = styled.div`
display:flex;
gap:50px;
`
const ProductDetail =()=>{
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();
    const location = useLocation();
    const item = location.state.item;

    return <Container>
                <Imagewrapper><Image src={item.image}></Image></Imagewrapper>
                <PDWrapper>
                    <Subtitle>{item.title.slice(0,6)}</Subtitle>    
                    <Title>{item.title.slice(0,12)}</Title>
                    <Statebadge>in-stock</Statebadge>
                    <Ratingbadge>({item.rating.rate} Reviews)</Ratingbadge>
                    <Paragraph>{item.description.slice(0,130)}</Paragraph>
                    <Pricing>${item.price}</Pricing>
                    <Bookorder>
                        <Counter><Countbtn icon="fa-minus" onClick={() => dispatch(decrement(item))} />
                        <Qty>{count}</Qty>
                        <Countbtn icon="fa-plus" onClick={() => dispatch(increment(item))}/>
                        </Counter>
                        <AddToCart onClick={()=> dispatch(addtocart(item))}>Add To Cart</AddToCart>
                    </Bookorder>
                </PDWrapper>
            </Container>
}
export default ProductDetail;