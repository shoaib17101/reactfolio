import { FaArrowDown } from "react-icons/fa";
import bgimage from '../assets/bgimage.png'
import style from '../Components/expertise.module.css'


export default function Hero() {
    return (
        <>
            <section className= {`  h-screen w-full  flex flex-col  items-center justify-center    brightness-100   `} id={style.hero} style={{background:`url(${bgimage}) center/cover no-repeat`}}>
                <article className="flex flex-col text-center text-white  gap-6 items-center  h-full  justify-center   md:py-33 ">
                    <h1 className="font-bold md:text-7xl md:w-2/3 text-6xl  ">WordPress Developer & Theme Customization Expert</h1>
                    <p className="text-xl md:text-2xl font-bold">With 3+ years of experience crafting exceptional WordPress solutions</p>
                    <p className="md:w-1/3 ">Specializing in custom theme development, Elementor Pro, WooCommerce, and transforming Figma designs into pixel-perfect WordPress websites.</p>
                    <div className="flex justify-center gap-3 py-5">
                        <button className="btn bg-white px-8 text-blue-400 rounded-full hover:bg-gray-100">View Projects</button>
                        <button className="btn bg-[rgba(33,44,54,0.38)] px-8 text-white hover:text-blue-300 border-0 hover:bg-white rounded-full">Download CV</button>
                    </div>
                    <span className="absolute bottom-10  animate-bounce"><a href="#skills"><FaArrowDown size={22}/> </a></span>
                </article>

            </section>


        </>
    )
}