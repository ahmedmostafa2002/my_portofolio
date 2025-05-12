import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 min-h-screen flex flex-col justify-center items-center px-18 py-12">
       <p className="text-cyan-300 font-mono text-lg">Contact</p>
       <h1 className="text-white text-4xl font-bold my-2">Get In Touch</h1>
       <span className=" h-1.5  w-22 bg-cyan-600 my-4" />
       <p className="text-gray-400 text-lg w-full lg:w-1/2 text-center font-bold">Feel free to reach out to me for any inquiries or opportunities</p>
       <div className="my-8 flex flex-col lg:flex-row gap-4 lg:justify-center w-full">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 rounded-lg border border-gray-500 px-6 py-4">
        <h2 className="text-white text-xl font-bold mx-4 my-2 w-fit">Contact Information</h2>
        <div className='flex items-center gap-4'>
            <div className='h-8 w-8 bg-cyan-800 rounded-full flex justify-center items-center'>
            <PhoneOutlinedIcon fontSize='small' className='text-cyan-400 '/>
            </div>
            <span className='flex flex-col justify-center'>
            <h2 className='text-white text-base font-bold'>Phone</h2>
            <a href='tel:+201016718107' target="_blank" className="text-gray-400 text-sm  w-full lg:w-1/2 text-center font-bold">+201016718107</a>
            </span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='h-8 w-8 bg-cyan-800 rounded-full flex justify-center items-center'>
            <EmailOutlinedIcon fontSize='small' className='text-cyan-400 '/>
            </div>
            <span className='flex flex-col justify-center'>
            <h2 className='text-white text-base font-bold'>Email</h2>
            <a href='mailto:ahmedmostafa4497@gmail.com' target="_blank" className="text-gray-400 text-sm  w-full lg:w-1/2 text-center font-bold">ahmedmostafa4497@gmail.com</a>
            </span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='h-8 w-8 bg-cyan-800 rounded-full flex justify-center items-center'>
            <LocationOnOutlinedIcon fontSize='small' className='text-cyan-400 '/>
            </div>
            <span className='flex flex-col justify-center'>
            <h2 className='text-white text-base font-bold'>Location</h2>
            <a href='#' className="text-gray-400 text-sm whitespace-nowrap font-bold">
                Cairo, Egypt
            </a>
            </span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='h-8 w-8 bg-cyan-800 rounded-full flex justify-center items-center'>
            <GitHubIcon fontSize='small' className='text-cyan-400 '/>
            </div>
            <span className='flex flex-col justify-center'>
            <h2 className='text-white text-base font-bold'>Github</h2>
            <a href='https://github.com/ahmedmostafa2002' target="_blank" className="text-gray-400 text-sm whitespace-nowrap font-bold">
            github.com/ahmedmostafa2002
            </a>
            </span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='h-8 w-8 bg-cyan-800 rounded-full flex justify-center items-center'>
            <LinkedInIcon fontSize='small' className='text-cyan-400 '/>
            </div>
            <span className='flex flex-col justify-center'>
            <h2 className='text-white text-base font-bold'>LinkedIn</h2>
            <a href='https://www.linkedin.com/in/ahmed-mostafa-50364b280' target="_blank" className="text-gray-400 text-sm whitespace-nowrap font-bold">
            linkedin.com/in/ahmed-mostafa
            </a>
            </span>
        </div>


        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4 rounded-lg border border-gray-500  px-6 py-4">
        <h2 className="text-white text-xl font-bold my-2 w-fit">Send Me a Message</h2>
        <div className='flex flex-col gap-3'>
        <label htmlFor="name" className='text-gray-400 text-sm font-semibold'>Name</label>
        <input type="text" placeholder="Your name" className='text-gray-400 border border-gray-500 py-1 px-3 rounded-md'/>
        </div>
        <div className='flex flex-col gap-3'>
        <label htmlFor="name" className='text-gray-400 text-sm font-semibold'>Email</label>
        <input type="text" placeholder="Your email" className='text-gray-400 border border-gray-500 py-1 px-3 rounded-md'/>
        </div>
        <div className='flex flex-col gap-3'>
        <label htmlFor="name" className='text-gray-400 text-sm font-semibold'>Subject</label>
        <input type="text" placeholder="subject" className='text-gray-400 border border-gray-500 py-1 px-3 rounded-md'/>
        </div>
        <div className='flex flex-col gap-3'>
        <label htmlFor="name" className='text-gray-400 text-sm font-semibold'>Message</label>
        <textarea 
            placeholder="Your message" 
            className='text-gray-400 border border-gray-500 py-1 px-3 rounded-md h-32'
            rows={4}
        ></textarea>
        </div>
        <input type="button" value="Send Message" className='bg-cyan-400 text-white text-sm py-2 rounded-md cursor-pointer font-semibold'/>
        </div>
       </div>
       <div className='flex w-full justify-between mt-8 '>
        <div className='flex flex-col justify-center items-start'>
        <h2 className="font-bold text-white text-xl">Ahmed<span className="text-2xl text-cyan-400">.</span></h2>
        <p className="text-gray-400 text-sm whitespace-nowrap text-center font-bold">Full Stack Web Developer</p>

        </div>
        <div className='my-8 flex items-center gap-6'>
               <a href="https://github.com/ahmedmostafa2002" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
               <a href="https://www.linkedin.com/in/ahmed-mostafa-50364b280" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
               <a href="mailto:ahmedmostafa4497@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailOutlinedIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
            </div>
       </div>
       <div className='flex w-full justify-between mt-8 '>
       <p className="text-gray-400 text-xs whitespace-nowrap text-center font-bold">© 2025 Ahmed Mostafa. All rights reserved.</p>
       <a href="#home" target="_self" className='animate-bounce'>
        <ArrowUpwardOutlinedIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
       </a>
        </div>
    </section>
  );
}
export default Contact;