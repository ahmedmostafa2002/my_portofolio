import CodeIcon from '@mui/icons-material/Code'; 
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import StorageIcon from '@mui/icons-material/Storage';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Skills() {
  return (
    <section id="skills" className="relative bg-gray-800 min-h-screen flex flex-col justify-center items-center px-18 py-12">
      <p className="text-cyan-300 font-mono text-lg">Skills</p>
            <h1 className="text-white text-4xl font-bold my-2">What I Do</h1>
            <span className=" h-1.5  w-22 bg-cyan-600 my-4" />
            <p className="text-gray-400 text-lg w-full lg:w-1/2 text-center font-bold">A showcase of my technical abilities and professional expertise</p>
            <div className='flex flex-col lg:flex-row gap-3 w-full mt-16 '>
            <span className="w-full lg:w-1/2 rounded-lg border-2 border-gray-600 bg-gray-900 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <DesktopMacIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Frontend Development</h2>
                </div>
                <div className='flex flex-wrap gap-3 my-5 w-full'>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>HTML5</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>CSS3</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>JavaScript</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>TypeScript</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>React</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Angular</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Bootstrap</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Tailwind</span>
                </div>
                </span>
            <span className="w-full lg:w-1/2 rounded-lg border-2 border-gray-600 bg-gray-900 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <StorageIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>BackEnd Development</h2>
                </div>
                <div className='flex flex-wrap gap-3 my-5 w-full'>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Node</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Express.js</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Nest.js</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>MongoDB</span>
                </div>
                </span>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 w-full my-10 '>
            <span className="w-full lg:w-1/2 rounded-lg border-2 border-gray-600 bg-gray-900 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <CodeIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Programming</h2>
                </div>
                <div className='flex flex-wrap gap-3 my-5 w-full'>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>OOP</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Git & GitHub</span>
                </div>
                </span>
            <span className="w-full lg:w-1/2 rounded-lg border-2 border-gray-600 bg-gray-900 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <PersonOutlineOutlinedIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Soft Skills</h2>
                </div>
                <div className='flex flex-wrap gap-3 my-5 w-full'>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Team work</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Time Management</span>
                 <span className='text-gray-300 hover:bg-cyan-900 rounded-full py-1 px-4 bg-gray-800'>Effective Communication</span>
                </div>
                </span>
            </div>
            <a href="#experience" target="_self" className='absolute bottom-4 left-1/2 animate-bounce'>
                   <ArrowDownwardIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
            </a>
    </section>
  );
}

export default Skills;