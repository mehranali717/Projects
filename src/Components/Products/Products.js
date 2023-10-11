// import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AddToCart, ImageWrapper } from "../../style";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addtocart } from "../../Redux/AddtToCartSlice";
import { useDispatch, useSelector } from "react-redux";
const Products = ({products})=>{
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.addtocart.cart);
  const Array = [1,2,3,4];
    const navigate = useNavigate();
    const onClick = (item) => {
      navigate("/detail", {
        state: {
          item: item,
        },
      });
    };
    return <div className="flex">
              <div className="container flex flex-wrap justify-center gap-4">
              {products.map((item, index) => (
                  <div className="flex flex-column flex-wrap items-center border-1 rounded-[10px]" key={index}>
                    <ImageWrapper className="border-b-[1px]" onClick={() => onClick(item)}>
                      <img src={item.image} alt="some product" className="h-[70%] w-[70%] transition-all delay-800" />
                    </ImageWrapper>
                    <div>
                        <span className="text-[12px] text-[#55585b] font-[500] capitalize">{item.category}</span>
                        <h3 className="text-[20px] text-[#010f1c] font-[500] pb-[3px] mb-0">{item.title.slice(0,12)}</h3>
                        <span className="text-[12px] font-[500]">{Array.map(()=><FontAwesomeIcon className="text-warning" icon="star"/>)}
                        <FontAwesomeIcon className="text-warning" icon="star-half-stroke"  />  ({item.rating.rate} Reviews)</span>
                        <span className="block text-[15px] text-[#0989ff] font-[700]" ><span className="text-[#55585b] text-[12px] font-[500] line-through">$939</span> {item.price}</span>
                        {/* <Button >my First ant component</Button> */}
                        <AddToCart onClick={()=> dispatch(addtocart(item))}
                        disabled={cartItems.some(cartItem => cartItem.id === item.id)}
                        className={cartItems.some(cartItem => cartItem.id === item.id)?"disabled mb-[10px]":'my-[10px]'} >
                            {cartItems.some(items => item.id === items.id)? "Added To Cart": "Add To Cart"}</AddToCart>
                    </div>
                  </div>
                ))}
              </div>
  </div>
}
export default Products;