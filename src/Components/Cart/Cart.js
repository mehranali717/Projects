import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayModal, removeCartItems } from "../../Redux/AddtToCartSlice";
import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const IconWrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  color: #2b2f32;
  transition: 0.6s;
  & > :hover {
    color: #007aff;
  }
`;
const Circularbadge = styled.span`
  background-color: #fd4b6b;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  right: -13px;
  text-align: center;
  top: -10px;
  width: 21px;
  height: 21px;
`;
const IconinnerWrapper = styled.span`
  position: relative;
  cursor:pointer;
`;
const Image = styled.img`
  width:70px;
  height:70px;
  padding:10px;
  border:1px solid #eaebed;
`
const Body = styled.div`
  display:flex;
  padding:20px 0px;
  border-bottom:1px solid #eaebed;
`
const Cartwrapper = styled.div`
  padding:0px 25px;
  width:350px;
  min-height:100%;
  position:fixed;
  background-color:#bfbfbf;
  right:0;
  top:0;
`
const CartHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid #eaebed;
`
const CartTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color:#010f1c;
  line-height:1.2;
  margin-bottom:0px;
  padding:20px 0px;
`
const Span = styled.span`
  padding:15px 0px;
  border-bottom:1px solid #eaebed;
  display:block;
  padding:15px 0px;
  border-bottom:1px solid #eaebed;
  display:block;
`
const Itemtitle = styled.h3`
  color:#010f1c;
  font-size:15px;
  color:#010f1c;
  font-size:15px;
  padding:0px 15px;
  margin-bottom:0px;
`
const Totalbills = styled.div`
  padding:15px 0px 30px;
  display:flex;
  border-top:1px solid #eaebed;
  border-bottom:1px solid #eaebed;
  padding:15px 0px 30px;
  display:flex;
  border-top:1px solid #eaebed;
  border-bottom:1px solid #eaebed;
  justify-content:space-between;
`
const Subtotal = styled.span` 
  font-size:15px;
  color:#010f1c;
  font-weight:500;
`
const Button = styled.button`
  border:1px solid #3f3f3f;
  font-size:16px;
  text-align:center;
  width:100%;
  cursor:pointer;
  color:#fff;
  padding:9px 30px;
  font-weight:500;
  transition:0.6s;
  letter-spacing:2px;
  background-color:#010f1c;
`
const Hamburger = styled.span`
  background: transparent;
  color:#010f1c;
  cursor:pointer;
  font-size: 22px;
  font-weight:300;
`
const Scrollable = styled.div`
  height:400px;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display:none;
  }
`
const ItemRemover = styled.span`
  background: transparent;
  color:#4f4f4f;
  cursor:pointer;
  font-size: 15px;
  font-weight:light;
`
const Cart = ({ icon }) => {
    const modal = useSelector((state)=>state.modal.isDisplayed);
    const cartItems = useSelector((state)=>state.addtocart.cart);
    const dispatch = useDispatch();
  return <>
           <IconWrapper>
              {icon.map((icon, index) => (
                <IconinnerWrapper key={index}>
                  <FontAwesomeIcon onClick={() => dispatch(displayModal())} icon={icon.icon} />
                  <Circularbadge>{cartItems.length}</Circularbadge>
                </IconinnerWrapper>
              ))}
            </IconWrapper>
            {modal && <Cartwrapper data-aos="fade-left">
              <CartHeader>
                <CartTitle>Shopping Cart</CartTitle>
                <Hamburger onClick={()=>dispatch(displayModal())}><FontAwesomeIcon icon="xmark"/></Hamburger>
              </CartHeader>
              <Span>You are eligible for Shipping</Span>
              <Scrollable>
              {cartItems.map((item, index) => (<React.Fragment key={index}>
                          <Body>
                            <Image src={item.image} alt="img" />
                            <Itemtitle>
                              {item.title} (X{item.quantity})
                            </Itemtitle>
                            <ItemRemover onClick={() => dispatch(removeCartItems(item.id))}>
                              <FontAwesomeIcon icon="xmark" />
                            </ItemRemover>
                          </Body>
                        </React.Fragment>)
                      )}
                </Scrollable>
                <Totalbills><Subtotal>Subtotal :</Subtotal> <Subtotal>$119</Subtotal></Totalbills>
                 <Button onClick={()=>dispatch(displayModal())}>OK</Button>
              </Cartwrapper>}
  </>; 
};
export default Cart;