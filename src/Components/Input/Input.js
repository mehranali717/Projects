const Input = ({label, register, ...props})=>{
    return <>
        <label className="text-[#010f1c] text-[14px]">{label}</label>
        <input className="h-[60px] text-[14px] px-[26px] border-1 border-solid border-[#e0e2e3] focus:outline-none focus-visible:none" {...props}{...register} />
    </>
}
export default Input