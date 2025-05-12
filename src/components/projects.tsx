import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center px-18 py-12">
       <p className="text-cyan-300 font-mono text-lg">Projects</p>
       <h1 className="text-white text-4xl font-bold my-2">My Work</h1>
       <span className=" h-1.5  w-22 bg-cyan-600 my-4" />
       <p className="text-gray-400 text-lg w-full lg:w-1/2 text-center font-bold">A collection of my work that showcases my skills and experience</p>
       <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center my-8 gap-4">
        <span className="flex flex-col w-full lg:w-5/18 bg-gray-900 rounded-lg border border-gray-500">
        <img src="projects/e-commerce.png" alt="portofolio project" className="w-full h-50 "/>
        <h2 className="text-white text-2xl font-bold mx-4 my-2 w-fit">E-commerce Website</h2>
        <p className="text-gray-400 text-base w-9/10 text-start font-semibold mx-4 break-words">A team-based e-commerce platform built with Angular, HTML, CSS, and Bootstrap at ITI.</p>
        <div className='flex flex-wrap gap-3 mx-4 my-5 w-full'>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Angular</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Html</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Css</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Bootstrap</span>
        </div>
        <a href="https://github.com/ahmedmostafa2002/angular-project" target="_blank" rel="noopener noreferrer" className='mx-4 mb-2 grow flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-300 ease-in-out'>
          <GitHubIcon fontSize='medium'/> Github
        </a>
        </span>
        <span className="flex flex-col w-full lg:w-5/18 bg-gray-900 rounded-lg border border-gray-500">
        <img src="projects/quran.jpg" alt="portofolio project" className="w-full h-50 "/>
        <h2 className="text-white text-2xl font-bold mx-4 my-2 w-fit">Quran Kareem APP</h2>
        <p className="text-gray-400 text-base w-9/10 text-start font-semibold mx-4 break-words">A cross-platform mobile application for reading the Quran with clean and readable Arabic text.</p>
        <div className='flex flex-wrap gap-3 mx-4 my-5 w-full'>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Flutter</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Dart</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>GetX</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>Google Fonts</span>
        </div>
        <a href="https://github.com/ahmedmostafa2002/Quran-Kareem" target="_blank" rel="noopener noreferrer" className='mx-4 mb-2 grow flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-300 ease-in-out'>
          <GitHubIcon fontSize='medium'/> Github
        </a>
        </span>
        <span className="flex flex-col w-full lg:w-5/18 bg-gray-900 rounded-lg border border-gray-500">
        <img src="projects/portofolio.PNG" alt="portofolio project" className="w-full h-50 "/>
        <h2 className="text-white text-2xl font-bold mx-4 my-2 w-fit">Portfolio Website</h2>
        <p className="text-gray-400 text-base w-9/10 text-start font-semibold mx-4 break-words">A personal portfolio website showcasing my skills and projects.</p>
        <div className='flex flex-wrap gap-3 mx-4 my-5 w-full'>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>React</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>TailWind Css</span>
          <span className='text-gray-300 hover:bg-cyan-900 rounded-full h-6 flex justify-center items-center text-xs px-3 bg-gray-800'>TypeScript</span>
        </div>
        <a href="https://github.com/ahmedmostafa2002/my_portofolio" target="_blank" rel="noopener noreferrer" className='mx-4 mb-2 grow flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-300 ease-in-out'>
          <GitHubIcon fontSize='medium'/> Github
        </a>
        </span>
       </div>
       <a href="#contact" target="_self" className='absolute bottom-4 left-1/2 animate-bounce'>
               <ArrowDownwardIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
       </a>
    </section>
  );
}

export default Projects;