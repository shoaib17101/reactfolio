import { FaCheck } from "react-icons/fa";



export default function Services() {


    return(
        <>
        <section className="flex flex-col items-center gap-5 justify-center p-3 py-20  " id="services">
            <h1 className="md:text-6xl text-4xl font-bold">Services I Offer</h1>
            <p className="text-lg pb-5 text-center">High-quality web development services tailored to your needs</p>
            <div className="flex flex-col  justify-between gap-8 lg:w-[80%] lg:flex-row lg:mx-auto items-center">
               <div className="flex flex-col  p-4 lg:w-1/2 w-full">
                <div className="flex gap-3 items-center border-b py-5 "><FaCheck size={23} className="bg-blue-100 rounded-full p-1"/><h1 className="text-lg font-bold">Custom WordPress Development</h1></div>
                <div className="flex gap-3 items-center border-b py-5 "><FaCheck size={23} className="bg-blue-100 rounded-full p-1"/><h1 className="text-lg font-bold">Theme Customization & Development</h1></div>
                <div className="flex gap-3 items-center border-b py-5 "><FaCheck size={23} className="bg-blue-100 rounded-full p-1"/><h1 className="text-lg font-bold">WooCommerce E-commerce Setup</h1></div>
                <div className="flex gap-3 items-center border-b py-5 "><FaCheck size={23} className="bg-blue-100 rounded-full p-1"/><h1 className="text-lg font-bold">Elementor & Elementor Pro</h1></div>
                <div className="flex gap-3 items-center  py-5 "><FaCheck size={23} className="bg-blue-100 rounded-full p-1"/><h1 className="text-lg font-bold">Figma to WordPress Conversion</h1></div>
               </div>
               <article className="flex flex-col gap-4  bg-gray-50 lg:w-1/2 p-4 shadow-sm py-10 rounded-2xl">
                <h1 className="text-2xl font-bold">Ready to Start Your Project?</h1>
                <p>I specialize in creating high-quality WordPress websites that are fast, secure, and scalable. With over 3 years of experience, I bring expertise in custom theme development, WooCommerce, and converting designs into pixel-perfect WordPress sites.</p>
                <button className="btn btn-primary w-full">Get Started Today</button>
               </article>
            </div>
            <section className="flex lg:w-[84%] md:grid md:grid-cols-2 lg:grid-cols-3 flex-col  justify-around items-center gap-4">
                <div className="flex flex-col gap-3  p-4 bg-gray-50  rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-100">
                    <h1 className="md:text-2xl text-xl font-bold ">ACF & Custom Fields</h1>
                    <p>Implementing Advanced Custom Fields (ACF) for flexible content management and custom post type development.</p>
                </div>
                <div className="flex flex-col gap-3  p-4 bg-gray-50  rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-100">
                    <h1 className="md:text-2xl text-xl font-bold ">Website Maintenance & Support</h1>
                    <p>Ongoing maintenance, updates, security monitoring, and technical support to keep your WordPress site running smoothly.</p>
                </div>
                <div className="flex flex-col gap-3  p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-100">
                    <h1 className="md:text-2xl text-xl font-bold ">Performance Optimization</h1>
                    <p>Speed optimization, caching implementation, and performance tuning to ensure fast loading times and better SEO.</p>
                </div>
               
            </section>

        </section>
        </>
    )
}