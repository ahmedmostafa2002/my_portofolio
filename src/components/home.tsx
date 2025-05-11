import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Home(){
    return(
        <section id='home' className="bg-gradient-to-br from-gray-800 to-black min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-0 pb-6 pt-16 lg:py-0 ps-18 pe-30">
           <div className="w-full lg:w-1/2 flex flex-col gap-4">
           <p className="text-cyan-300 font-mono text-lg">Hi, my name is</p>
            <h1 className="text-white text-6xl font-bold">Ahmed Mostafa</h1>
            <h3 className="text-gray-400 text-3xl font-bold">Full Stack Web Developer</h3>
            <p className="text-gray-400 text-2xl font-bold">I am an enthusiastic Full Stack Web Developer passionate about web development and committed to delivering high-quality software solutions.</p>
            <div className='my-8 flex items-center gap-6'>
               <a href="https://github.com/ahmedmostafa2002" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
               <a href="https://www.linkedin.com/in/ahmed-mostafa-50364b280" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
               <a href="mailto:ahmedmostafa4497@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
               </a>
            </div>
            <div className='flex gap-4'>
                <a href='#contact' className='rounded-lg px-8 py-3  text-white bg-cyan-500 transition-all duration-300 ease-in-out cursor-pointer'>Contact Me</a>
                <a href='#projects' className='rounded-lg px-8 py-3  text-cyan-500 border border-cyan-500 hover:bg-cyan-950 transition-all duration-300 ease-in-out cursor-pointer'>View Projects</a>
            </div>
           </div>
           <div className="h-96 w-96 rounded-full">
            <img src="photo.jpg" alt="my photo" className="h-96 w-96 rounded-full border-4 border-gray-200"/>
           </div>
           <a href="#about" target="_self" className='absolute bottom-4 left-1/2 animate-bounce'>
                <ArrowDownwardIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
            </a>
        </section>
    );
}

export default Home;