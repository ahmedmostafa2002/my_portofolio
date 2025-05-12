import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School'; // Import SchoolIcon
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Experience(){
    return(
        <section id="experience" className="relative bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen flex flex-col justify-center items-center px-18 pb-20 pt-12">
             <p className="text-cyan-300 font-mono text-lg">Experience</p>
            <h1 className="text-white text-4xl font-bold my-2">My Journey</h1>
            <span className=" h-1.5  w-22 bg-cyan-600 my-4" />
            <p className="text-gray-400 text-lg w-full lg:w-1/2 text-center font-bold">My professional journey and practical experiences</p>
            <div className="mt-8 flex flex-col h-full w-full">
                <div className="flex items-start justify-center w-8/11">
                <div className="me-8 w-full lg:w-1/3 flex flex-col items-end">
                        <h2 className="text-xl font-bold text-right text-white">Information Technology Institute (ITI)</h2>
                        <p className="text-cyan-400 text-right">Mearn Stack Track</p>
                        <p className="text-gray-400 text-right">04 December 2024 - Present <CalendarMonthIcon fontSize='small'/></p>
                        <p className="text-gray-400 text-right text-lg">Gained hands-on experience in modern web development technologies through a 4-month intensive track.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <div className='h-8 w-8 bg-cyan-400 rounded-full flex justify-center items-center'>
                    <SchoolIcon fontSize='small' className='text-gray-100 '/>
                    </div> 
                    <span className="h-52 w-0.5 bg-gray-600"/>
                    </div>
                </div> 
                
                <div className="flex items-start justify-center lg:justify-end w-8/11 lg:w-90/110 xl:w-90/113">
                <div className='hidden lg:flex flex-col justify-center items-center'>
                    <div className='h-8 w-8 bg-cyan-400 rounded-full flex justify-center items-center'>
                    <SchoolIcon fontSize='small' className='text-gray-100 '/>
                    </div> 
                    <span className="h-52 w-0.5 bg-gray-600"/>
                    </div>
                <div className="me-8 lg:ms-8 lg:me-0 w-full lg:w-1/3 flex flex-col items-end lg:items-start">
                <h2 className="text-xl font-bold text-white text-right lg:text-left">E-commerce Website Project</h2>
                        <p className="text-cyan-400 text-right lg:text-left">ITI Team Project</p>
                        <p className="text-gray-400 text-right lg:text-left"><span className='hidden lg:inline'><CalendarMonthIcon fontSize='small'/></span> MAR 2025 - APR 2025 <span className='lg:hidden'><CalendarMonthIcon fontSize='small'/></span></p>
                        <p className="text-gray-400 text-lg text-right lg:text-left">Developing an e-commerce website using HTML, CSS, Angular, and Bootstrap as part of a team-based project at ITI.</p>
                        <a href="https://github.com/ahmedmostafa2002/angular-project" target="_blank" rel="noopener noreferrer" className='cursor-pointer text-cyan-400 text-right lg:text-left'>
                        View project on GitHub
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:hidden'>
                    <div className='h-8 w-8 bg-cyan-400 rounded-full flex justify-center items-center'>
                    <SchoolIcon fontSize='small' className='text-gray-100 '/>
                    </div> 
                    <span className="h-52 w-0.5 bg-gray-600"/>
                    </div>
                </div> 
                <div className="flex items-start justify-center w-8/11">
                <div className="me-8 w-full lg:w-1/3 flex flex-col items-end">
                        <h2 className="text-xl font-bold text-right text-white">Flutter Course</h2>
                        <p className="text-cyan-400 text-right">Instructor: Wael Abo Hamza</p>
                        <p className="text-gray-400 text-right">2024 • Duration: 17:37:37 h <CalendarMonthIcon fontSize='small'/></p>
                        <p className="text-gray-400 text-right text-lg">Completed a Flutter course and developed a Quran Kareem App with features for reading the Quran with clean and readable Arabic text.</p>
                        <a href="https://github.com/ahmedmostafa2002/Quran-Kareem" target="_blank" rel="noopener noreferrer" className='cursor-pointer text-cyan-400'>
                        View project on GitHub
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                    <div className='h-8 w-8 bg-cyan-400 rounded-full flex justify-center items-center'>
                    <SchoolIcon fontSize='small' className='text-gray-100 '/>
                    </div> 
                    <span className="h-52 w-0.5 bg-gray-600"/>
                    </div>
                </div> 
            </div> 
            <a href="#projects" target="_self" className='absolute bottom-4 left-1/2 animate-bounce'>
                   <ArrowDownwardIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
            </a>
        </section>
    );
}
export default Experience;