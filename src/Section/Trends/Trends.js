import { useSelector } from "react-redux";
import { Products } from "../../Components";

const Trendings =()=>{
    const data = useSelector((state)=>state.apiData.products);
    const sectionTitle = [
        {title:"New"},
        {title:"Featured"},
        {title:"Top Sellers"},
    ]
    return <section className="px-[20px]">
                <div className="container">
                    <div className="title flex justify-between items-center">
                        <h1 className="text-[#021d35] text-[45px]">Trending Products</h1>
                        <span className="w-[250px] h-[2px] bg-[#f1f1f1]"></span>
                        <ul className="flex justify-between w-[400px]">
                            {sectionTitle.map((title,index)=><li key={index} className="text-[#a0a2a4] text-[20px] font-[400]">{title.title}</li>)}
                        </ul>
                    </div>
                    <Products products={data}/>
                </div>
    </section>
}
export default Trendings;