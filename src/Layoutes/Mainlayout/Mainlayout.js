import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../Section"
const Mainlayout =()=>{
    const accountSubtitles = [
        {subtitle:"Track orders"},
        {subtitle:"Shipping"},
        {subtitle:"Wishlist"},
        {subtitle:"My Account"},
        {subtitle:"Order History"},
        {subtitle:"Returns"},
    ]
    const informationSubtitles = [
        {subtitle:"Our Story"},
        {subtitle:"Careers"},
        {subtitle:"Privacy Policy"},
        {subtitle:"Terms & Conditions"},
        {subtitle:"Latest News"},
        {subtitle:"Contact Us"},
    ]
    const contactSubtitles = [
        {subtitle:"Got Questions? Call us"},
        {subtitle:"+670 413 90 762"},
        {subtitle:"shofy@support.com"},
        {subtitle:"79 Sleepy Hollow St"},
    ]
        const footerlist = [
            {title:"My Account",subtitle:accountSubtitles},
            {title:"Information",subtitle:informationSubtitles},
            {title:"Talk To Us",subtitle:contactSubtitles}
        ]
    return <>
             <Header />
             <Outlet/>
             <Footer footerlist={footerlist}/>
             {/* <Products /> */}
    </>
}
export default Mainlayout;