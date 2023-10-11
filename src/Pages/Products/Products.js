import { useSelector } from "react-redux"
import ProductS from "../../Components/Products/Products"

const Products =()=>{
    const data = useSelector((state)=>state.apiData.products)
    return <ProductS products={data} />
}
export default Products