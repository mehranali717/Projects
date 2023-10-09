import "./Blog-grid.css";
import profile1 from "../../../../Assets/Images/user-2.jpg";
const BlogGrid =()=>{
    return <div className="w-[700px] flex flex-column mx-auto py-[20px]">
            <h2 className="text-[24px] font-[700] mb-[27px]">Comments (2)</h2>
            <div className="flex flex-column">
            <div className="flex mb-[10px]">
                        <img src={profile1} className="profile-wrapper me-[17px]" />
                        <div className="flex border-b-[1px]">
                        <div>
                            <h3 className="mb-[0px]">Lance Bogrol</h3>
                            <span className="text-[14px] font-[400] text-[#55585b]">12 April, 2023 at 3.50pm</span>
                            <p className="">By defining and following internal and external processes,
                                your team will have clarity on resources to attract and
                                retain customers for your business.</p>
                        </div>
                        <a href="#" className="border-1 border-[#e6e7e8] text-[#55585b] text-[15px] inline-block px-[14px] py-[4px] no-underline self-start">Reply</a>
                        </div>
            </div>
            <div className="flex mb-[10px] w-[600px] self-end">
                    <img src={profile1} className="profile-wrapper me-[17px]" />
                    <div className="flex border-b-[1px]">
                    <div>
                        <h3 className="mb-[0px]">Lance Bogrol</h3>
                        <span className="text-[14px] font-[400] text-[#55585b]">12 April, 2023 at 3.50pm</span>
                        <p className="">By defining and following internal and external processes,
                            your team will have clarity on resources</p>
                    </div>
                    <a href="#" className="border-1 border-[#e6e7e8] text-[#55585b] text-[15px] inline-block px-[14px] py-[4px] no-underline self-start">Reply</a>
                    </div>
            </div>
            </div>
    </div>
}
export default BlogGrid;