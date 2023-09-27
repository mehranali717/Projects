import { Product } from "../../Components";
import product1 from "../../Assets/Images/product-cat-1.png";
import product2 from "../../Assets/Images/product-cat-2.png";
import product3 from "../../Assets/Images/product-cat-3.png";
import product4 from "../../Assets/Images/product-cat-4.png";
import product5 from "../../Assets/Images/product-cat-5.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
margin:auto;
width:1140px;
`;
const Products =()=>{
    const [productList , setProductList] = useState([]);
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
    const getData=async()=>{
        const json = await fetchData('GET');
        setProductList([...json])
    }
    useEffect(()=>{
        getData();
    },[])
    const products = [
        {image:product1 , title:"CPU Heat Pipes"},
        {image:product2 , title:"Headphones"},
        {image:product3, title:"Mobiles"},
        {image:product4 , title:"Smart Watch"},
        {image:product5 , title:"Blutooths"},
    ]
    return <Container>
                <Product  products={productList}/>
    </Container>
}
export default Products;