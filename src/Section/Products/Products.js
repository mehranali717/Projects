import { Product } from "../../Components";
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
    return <Container>
                <Product  products={productList}/>
    </Container>
}
export default Products;