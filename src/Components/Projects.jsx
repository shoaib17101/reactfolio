import { useState } from "react"
import businessimage from '../assets/businesswebsite.png'
import ecommerce from '../assets/ecommerce.png'
import directory from '../assets/directory.png'
import theme from '../assets/theme.png'
import premium from '../assets/premium.png'
import restaurant from '../assets/restaurant.png'
import estate from '../assets/estate.png'

export default function Projects(){
    const [btn,setbtn]=useState('all')
    console.log(btn);
    
const allprojects=(
    <>
   
    <section className="grid md:grid-cols-3 gap-4 md:p-5 md:w-4/5 p-2">
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={businessimage} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Corporate Business Website</h2>
            <p className="card-detail">Professional corporate website with custom theme, responsive design, and integrated contact forms. Built with Elementor Pro and custom PHP functionality.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Bootstrap</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={ecommerce} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Premium E-Commerce Store</h2>
            <p className="card-detail">Full-featured WooCommerce store with custom product pages, cart functionality, payment gateway integration, and responsive design.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Stripe</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom CSS</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={theme} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Custom Theme Development</h2>
            <p>Bespoke WordPress theme built from scratch with ACF Pro for flexible content management, custom post types, and advanced customization options.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Bootstrap</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={directory} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Business Directory Platform</h2>
            <p>Comprehensive directory website with advanced search filters, business listings, user submissions, and location-based features.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Post Types</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">Google Maps API</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">ACF</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={premium} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Luxury Fashion Store</h2>
            <p>Elegant WooCommerce site for a high-end fashion brand, featuring custom product showcases, lookbooks, and seamless checkout experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={estate} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Real Estate Directory</h2>
            <p>Feature-rich real estate listing site with property search, agent profiles, and integrated map views for enhanced user experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={directory} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Medical Services Directory</h2>
            <p>Specialized directory for healthcare providers with appointment booking, service listings, and user reviews.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={restaurant} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Restaurant Business Site</h2>
            <p>Elegant WooCommerce site for a high-end fashion brand, featuring custom product showcases, lookbooks, and seamless checkout experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
                
            </section>
    
    </>
)
const businessprojects=(
    <>
    <section className="grid md:grid-cols-3 gap-4 md:p-5 md:w-4/5 p-2">
    <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={restaurant} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Restaurant Business Site</h2>
            <p>Elegant WooCommerce site for a high-end fashion brand, featuring custom product showcases, lookbooks, and seamless checkout experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={businessimage} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Corporate Business Website</h2>
            <p className="card-detail">Professional corporate website with custom theme, responsive design, and integrated contact forms. Built with Elementor Pro and custom PHP functionality.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Bootstrap</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
        <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={ecommerce} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Premium E-Commerce Store</h2>
            <p className="card-detail">Full-featured WooCommerce store with custom product pages, cart functionality, payment gateway integration, and responsive design.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Stripe</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom CSS</span>
            </div>
            </div>
        </div>
    </section>
    </>
)
const commerceprojects=(
    <>
    <section className="grid md:grid-cols-3 gap-4 md:p-5 md:w-3/4 p-2">
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={ecommerce} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Premium E-Commerce Store</h2>
            <p className="card-detail">Full-featured WooCommerce store with custom product pages, cart functionality, payment gateway integration, and responsive design.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Stripe</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom CSS</span>
            </div>
            </div>
        </div>
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={premium} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Luxury Fashion Store</h2>
            <p>Elegant WooCommerce site for a high-end fashion brand, featuring custom product showcases, lookbooks, and seamless checkout experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>

    </section>
    </>
)
const directoryprojects=(
    <section className="grid md:grid-cols-3 gap-4 md:p-5 md:w-3/4 p-2">
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={directory} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Business Directory Platform</h2>
            <p>Comprehensive directory website with advanced search filters, business listings, user submissions, and location-based features.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Post Types</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">Google Maps API</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">ACF</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={estate} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Real Estate Directory</h2>
            <p>Feature-rich real estate listing site with property search, agent profiles, and integrated map views for enhanced user experience.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
         <div className="card bg-gray-50 pb-5 rounded-xl hover:shadow-xl hover:bg-gray-100 transition duration-700">
            <figure >
            <img src={directory} className="hover:scale-105 transition-all duration-1000 " alt="" />
            </figure>
            <div className="card-body p-4 gap-5 ">
            <h2 className="card-title">Medical Services Directory</h2>
            <p>Specialized directory for healthcare providers with appointment booking, service listings, and user reviews.</p>
            <div className="flex flex-wrap gap-4 py-3">
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Wordpress</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Elementor Pro</span>
                <span className="bg-gray-100 rounded-lg  shadow-sm p-1">PHP</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">WooCommerce</span>
                <span className="bg-gray-100 rounded-lg shadow-sm  p-1">Custom Themes</span>
            </div>
            </div>
        </div>
           
    </section>

)

    return(
        <>
        <section className="flex flex-col py-20 justify-center items-center gap-5" id="projects">
            <h1 className="md:text-6xl text-4xl font-bold py-5">Featured Projects</h1>
            <p className="text-lg pb-4 md:w-1/3 text-center">A showcase of my recent WordPress development work across various industries</p>
            <div className="grid md:grid-cols-4 grid-cols-2 justify-around gap-3">
                <button className="btn  rounded-full bg-white hover:text-white transition-all duration-500 hover:bg-blue-700 " onClick={()=>setbtn('all')}>All Projects</button>
                <button className="btn  rounded-full bg-white hover:text-white transition-all duration-500 hover:bg-blue-700 " onClick={()=>setbtn('business')}>Business Sites</button>
                <button className="btn  rounded-full bg-white hover:text-white transition-all duration-500 hover:bg-blue-700 " onClick={()=>setbtn('commerce')}>E-Commerce Sites</button>
                <button className="btn  rounded-full bg-white hover:text-white transition-all duration-500 hover:bg-blue-700 " onClick={()=>setbtn('directory')}>Directory Sites</button>
            </div>
            {btn==='all'&& allprojects}
            {btn==='business'&& businessprojects}
            {btn==='commerce'&& commerceprojects}
            {btn==='directory'&& directoryprojects}
            
        </section>
        </>
    )
}