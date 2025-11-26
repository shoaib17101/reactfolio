import { FaClock, FaEnvelope, FaMailchimp, FaMapLocation, FaTimeline, FaVoicemail } from "react-icons/fa6";


export default function Contact(){


    return(
        <section className="flex flex-col  py-20 gap-5 items-center bg-gray-100">
            <h1 className="text-5xl font-bold">Get In Touch</h1>
            <p className="text-lg text-center">Have a project in mind? Let's discuss how I can help bring your vision to life</p>
            <section className="flex lg:flex-row flex-col justify-center p-3 w-full gap-3">

            <section className="flex flex-col  items-center lg:w-[50%]   ">
                <div className="flex md:flex-row flex-col   w-full px-3  bg-gray-50">
                    <div className="flex flex-col gap-3 p-3 lg:w-1/2">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name " className="p-2 bg-white shadow rounded-lg " placeholder="Enter Your Name " id="" />
                    </div>
                    <div className="flex flex-col gap-3 p-3 lg:w-1/2">
                    <label htmlFor="email">Your Email</label>
                    <input type="text" name="email " className="p-2 bg-white shadow rounded-lg " placeholder="Enter Your Name " id="" />
                    </div>
                   
                </div>
                <div className="flex px-3 w-full  bg-gray-50">
                 
                    <div className="flex flex-col gap-3 p-3 w-full">
                    <label htmlFor="email">Subject</label>
                    <input type="text" name="email " className="p-2 bg-white shadow rounded-lg " placeholder="Project Enquiry " id="" />
                    </div>
                   
                </div>
                <div className="flex px-3 w-full  bg-gray-50">
                 
                    <div className="flex flex-col gap-3 p-3 w-full">
                    <label htmlFor="email">Message</label>
                    <textarea name="msg" placeholder="Tell me about your project" id="" className="h-30 bg-white p-3"></textarea>
                    </div>
                   
                </div>
                <div className="flex px-4 w-full  bg-gray-50" id="contact">
                <button className="btn btn-primary rounded-lg text-white w-full my-1">Send Message</button>                                                  
                </div>
            </section>
            <div className="flex flex-col gap-4 lg:w-[35%]">
                <div className="flex  p-5 rounded-lg bg-white items-center gap-4  hover:bg-gray-50 hover:shadow-md">
                    <FaEnvelope size={40} color="blue" className="rounded-lg p-2 bg-blue-100"/> <span className="flex flex-col  justify-center"><h2 className="text-lg font-bold">Email</h2> <p>wordpress.developer@example.com</p></span>
                </div>
                <div className="flex  p-5 rounded-lg bg-white items-center gap-4  hover:bg-gray-50 hover:shadow-md">
                    <FaMapLocation size={40} color="blue" className="rounded-lg p-2 bg-blue-100"/> <span className="flex flex-col  justify-center"><h2 className="text-lg font-bold">Location</h2> <p>Available Worldwide (Remote)</p></span>
                </div>
                <div className="flex  p-5 rounded-lg bg-white items-center gap-4  hover:bg-gray-50 hover:shadow-md">
                    <FaTimeline size={40} color="blue" className="rounded-lg p-2 bg-blue-100"/> <span className="flex flex-col  justify-center"><h2 className="text-lg font-bold">Availability</h2> <p>Available for freelance projects</p></span>
                </div>
                <div className="flex  p-5 rounded-lg bg-white items-center gap-4  hover:bg-gray-50 hover:shadow-md">
                    <FaClock size={40} color="blue" className="rounded-lg p-2 bg-blue-100"/> <span className="flex flex-col  justify-center"><h2 className="text-lg font-bold">Response Time</h2> <p>24-48 hours response time</p></span>
                </div>
            </div>
            </section>
        </section>
    )
}