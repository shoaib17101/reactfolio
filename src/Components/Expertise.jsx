import { FaCheck, FaDatabase, FaRocket, FaSpaceShuttle, FaTools } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaGear, FaShuttleSpace } from "react-icons/fa6";


export default function Expertise(){

    return(
        <section className="flex flex-col  py-20 gap-10 w-full bg-[#f7f7f7] justify-center items-center " id="skills">
            <h1 className="md:text-5xl font-bold text-4xl  ">Technical Expertise</h1>
            <p className="md:text-xl  md:w-1/3 text-center">Comprehensive WordPress development skills with expertise in modern web technologies</p>
            <article className="grid md:grid-cols-3 gap-7 md:p-10 md:px-5 md:w-[80%] w-full p-2 mx-auto" >
                <div className="flex flex-col gap-4  p-4 bg-[rgb(255,255,255)] hover:shadow-2xl hover:bg-[#dae3ed68] rounded-2xl">
                    <FaGear size={50} color="white" className="border bg-blue-700 p-2 rounded-lg" />
                    <h1 className="text-lg font-bold">WordPress Core</h1>
                    <ul className="flex flex-col gap-1">
                        <li className="flex items-center gap-2" > <FaCheck size={12}/>Wordpress </li>
                        <li className="flex items-center gap-2" > <FaCheck size={12}/>Elementor & Elementor Pro </li>
                       <li className="flex items-center gap-2" > <FaCheck size={12}/>WooCommerce Setup & Customization</li>
                        <li className="flex items-center gap-2" > <FaCheck size={12}/> Custom Theme Development</li>
                        <li className="flex items-center gap-2" > <FaCheck size={12}/> Theme Builders</li>
                        <li className="flex items-center gap-2" > <FaCheck size={12}/> Plugin Integration & Customization</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4  p-4 bg-[rgb(255,255,255)] hover:shadow-2xl hover:bg-[#dae3ed68] rounded-2xl">
                    <FaTools size={50} color="white" className="border bg-blue-700 p-2 rounded-lg" />
                    <h1 className="text-lg font-bold">Advanced Tools </h1>
                    <ul className="flex flex-col gap-2">
                      <li  className="flex items-center gap-2"> <FaCheck size={12}/>Advanced Custom Fields (ACF)</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>ACF Pro </li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>Custom Post Types</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>Figma to WordPress Conversion</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>Page Builders</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>WordPress Multisite</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4  p-4 bg-[rgb(255,255,255)] hover:shadow-2xl hover:bg-[#dae3ed68] rounded-2xl">
                    <FaArrowRightArrowLeft size={50} color="white" className="border bg-blue-700 p-2 rounded-lg" />
                    <h1 className="text-lg font-bold">Frontend Development</h1>
                    <ul className="flex flex-col gap-2">
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> WordPress Development</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Elementor & Elementor Pro </li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> WooCommerce Setup & Customization</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Custom Theme Development</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Theme Builders</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Plugin Integration & Customization</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4  p-4 bg-[rgb(255,255,255)] hover:shadow-2xl hover:bg-[#dae3ed68] rounded-2xl">
                    <FaDatabase size={50} color="white" className="border bg-blue-700 p-2 rounded-lg" />
                    <h1 className="text-lg font-bold">Backend Development</h1>
                    <ul className="flex flex-col gap-2">
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>  PHP Development</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> MySQL Database </li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Custom Functions & Hooks</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> REST API Integration</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> WordPress Security</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Performance Optimization</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4  p-4 bg-[rgb(255,255,255)] hover:shadow-2xl hover:bg-[#dae3ed68] rounded-2xl">
                    <FaRocket size={50} color="white" className="border bg-blue-700 p-2 rounded-lg" />
                    <h1 className="text-lg font-bold">Specialized Services</h1>
                    <ul className="flex flex-col gap-2">
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> E-commerce Solutions</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Directory Websites </li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Theme Customization</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Business Websites</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/>  Backend Customization</li>
                        <li  className="flex items-center gap-2"> <FaCheck size={12}/> Client Requirement Implementation</li>
                    </ul>
                </div>

            </article>

        </section>
    )
}