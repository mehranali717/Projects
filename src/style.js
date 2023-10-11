import styled from "styled-components";

 export const ImageWrapper= styled.div`
 // border: 2px solid #02f2ea;
 height: 300px;
 width: 250px;
 display: flex;
 justify-content: center;
 align-items: center;
 // border-radius: 50%;
 margin-bottom: 20px;
 // background: radial-gradient(95.56% 95.56% at 50% 50%, #fff 0, #bddeff 100%);
 overflow: hidden;
 transition:0.8s;
 cursor: pointer;
 & > :hover {
   transition:0.8s;
   transform: scale(1.2);
 }`
 export const AddToCart = styled.button`
 border:1px solid #e0e2e3;
 font-size:16px;
 text-align:center;
 width:100%;
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