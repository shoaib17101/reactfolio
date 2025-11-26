import { BiNavigation } from "react-icons/bi"


export default function Header(){
return(
    <header className="w-full h-[60px] p-8 items-center px-20 flex fixed to-0% z-10 bg-[rgba(158,155,158,0.42)] backdrop-blur-md ">
        <nav className="flex justify-between px-12 items-center w-full  p-3">

        <div className="flex items-center justify-center"><h2 className="text-2xl font-bold"><span className="text-blue-500 ">WP</span> Developer</h2></div>
        <nav className="menu">
            <ul className="flex justify-center items-center text-[16px] ">
                <li><a href="#" >Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </nav>
    </header>
)


}