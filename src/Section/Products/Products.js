import { Product } from "../../Components";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../Redux/AddtToCartSlice";
const Container = styled.div`
margin:auto;
width:1140px;
`;
const Products =()=>{
    const cartItems = useSelector((state)=>state.apiData.products);
    const fetchData=async(method)=>{
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics',{
                method:method,
            });
            return await response.json();
        }
        catch(error){
            console.log(error.message)
        }
    }
    const dispatch = useDispatch()
    const getData=async()=>{
        const json = await fetchData('GET');
        dispatch(productsData([...json]));
    }
    useEffect(()=>{
        getData();
    },[])
    return <Container>
                <Product  products={cartItems}/>
    </Container>
}
export default Products;