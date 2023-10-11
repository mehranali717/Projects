import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addtocart } from "../../Redux/AddtToCartSlice";
import useCopyToClipboard from "../../Hooks/useCopyToClipboard";
import "./Product.css"
const Imagewrapper = styled.button`
  border: 2px solid #02f2ea;
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
  & > :hover {
    transform: scale(1.2);
  }
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Productouter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;
const Title = styled.h3`
  color: #010f1c;
  font-weght: 500;
  font-size: 20px;
  padding-bottom: 10px;
`;
const Image = styled.img`
  width: 50%;
  height: 50%;
  transition: 0.6s;
`;
const Span = styled.span`
  color: #55585b;
  font-size: 14px;
  font-weight: 400;
`;
const AddToCart = styled.button`
  border: 1px solid #e0e2e3;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  width: 100%;
  color: #010f1c;
  padding: 9px 30px;
  font-weight: 500;
  transition: 0.6s;
  letter-spacing: 2px;
  &:hover {
    background-color: #010f1c;
    border: 1px solid #010f1c;
    color: #fff;
  }
`;
const Copy = styled.button`
  width: 150px;
`;
const Product = ({ products }) => {
  const [isCopied, handleCopy] = useCopyToClipboard();
  const cartItems = useSelector((state)=>state.addtocart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = (item) => {
    navigate("/detail", {
      state: {
        item: item,
      },
    });
  };
  return (
    <>
      {/* <Copy onClick={()=>handleCopy(products)}>{isCopied?"Coppied":<FontAwesomeIcon icon="copy"/>}</Copy> */}
      <Productouter>
        {products
          .filter((item) => item.id !== 14)
          .map((item, index) => (
            <Thumbnail key={index}>
              <Imagewrapper  onClick={() => onClick(item)}>
                <Image src={item.image} alt="some product" />
              </Imagewrapper>
              <Title>{item.title.slice(0, 12)}</Title>
              <Span>3 products</Span>
              <AddToCart onClick={() => dispatch(addtocart(item))}
               disabled={cartItems.some(cartItem => cartItem.id === item.id)}
               className={cartItems.some(cartItem => cartItem.id === item.id) ? 'disabled' : ''}
               >
                {cartItems.some((items) => item.id === items.id)
                  ? "Added To Cart"
                  : "Add To Cart"}
              </AddToCart>
            </Thumbnail>
          ))}
      </Productouter>
    </>
  );
};
export default Product;
