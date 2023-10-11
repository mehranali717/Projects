import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sliderimg1 from "../../Assets/Images/slider-img-1.png";
const Banner =()=>{
    return <section className="bg-[#115061] py-[100px]">
            <div className="container flex justify-between items-center">
                <div className="w-[40%] flex flex-column">
                    <span className="text-[#fff] text-[16px] font-[400] pb-[12px]">Starting at $274.00</span>
                    <h1 className="font-[900] text-[56px] text-[#fff] leading-[1.02] pb-[30px]">The best tablet Collection 2023</h1>
                    <span className="text-[28px] font-[400] text-[#fff] mb-[40px]">Exclusive off -35% off this week</span>
                    <a className="text-[#010f1c] py-[9px] rounded-[5px] px-[29px] transition-all duration-400 border-[1px] bg-[#fff] self-start no-underline hover:bg-[transparent] hover:border-[1px]">Shop Now <FontAwesomeIcon icon="arrow-right" /></a>
                </div>
                <div>
                    <img src={Sliderimg1} />
                </div>
            </div>
    </section>
}
export default Banner;