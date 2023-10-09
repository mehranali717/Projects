import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../Components";
import { useForm } from "react-hook-form";
const scheme = yup.object({
    userName:yup.string().required("Name is required").min(5,"minimum of 5 characters"),
    email:yup.string().email("Enter Valid Email").test('domain-unsupported','This domain is not supported',function(value){
        return !value.endsWith('test.com');
    }).required("Email is required"),
    message:yup.string().required("Message is required").min(10,"minimum of 10 characters"),
    checkbox:yup.string().required("Check the checkbox"),
    })
const BlogList =()=>{
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(scheme)});
    const onSubmit =(data)=>{
        console.log({data})
    }
    return  <div className="flex flex-column items-center justify-center py-10">
                <div className="w-[731px]">
                    <h3 className="text-[24px] font-[500] mb-[8px]">Leave a Reply</h3>
                    <span className="text-16px mb-[43px] text-[#55585b]">Your email address will not be published. Required fields are marked *</span>
                </div>
                <form className="gap-[10px] w-[731px] flex flex-column justify-center" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" label="Your Name" placeholder="Shahnewaz Sakil" register={(register("userName"))}/>
                    <span className="text-[#f00]">{errors.userName?.message}</span>
                    <Input label="Your Email" type="text" placeholder="Shofy@mail.com" register={(register("email"))}/>
                    <span className="text-[#f00]">{errors.email?.message}</span>
                    <label className="text-[#010f1c] text-[14px]">Your Message</label>
                    <textarea className="h-[120px] px-[26px] py-[17px] border-1 border-solid border-[#e0e2e3] focus:outline-none focus-visible:none" placeholder="Write your message here..." {...register("message")}/>
                    <span className="text-[#f00]">{errors.message?.message}</span>
                    <div className="flex items-center gap-[8px]" >
                        <Input className="w-[20px]" type="checkbox" id="saveForm" register={(register("checkbox"))}/>
                        <label htmlFor="saveForm">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button type="submit" className="bg-[#0989ff] px-4 py-2 text-white self-start">Post Comment</button>
                    </form>
            </div>
}
export default BlogList;