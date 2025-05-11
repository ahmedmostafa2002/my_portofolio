import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function About(){



    return(
        <section id="about" className="relative bg-gradient-to-br from-gray-800 to-gray-900  min-h-screen flex flex-col justify-center items-center px-18 py-12">
            <p className="text-cyan-300 font-mono text-lg">About Me</p>
            <h1 className="text-white text-4xl font-bold my-2">Who Am I</h1>
            <span className=" h-1.5  w-22 bg-cyan-600 my-4" />
            <p className="text-gray-400 text-lg w-full lg:w-1/2 text-center font-bold">I am an enthusiastic Full Stack Web Developer passionate about web development and committed to delivering high-quality software solutions. I am seeking an opportunity to join a team where I can enhance my skills and gain practical experience.</p>
            <div className="w-full flex flex-col lg:flex-row gap-6 lg:justify-between items-center my-6">
                <span className="h-52 w-full lg:w-1/3 rounded-lg bg-gray-600 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <SchoolOutlinedIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Education</h2>
                </div>
                 <p className='text-gray-300 font-bold my-2'>Bachelor of Computer and Information</p>
                 <p className='text-gray-400 font-bold'>Menofia University (2020 - 2024)</p>
                </span>
                <span className="h-52 w-full lg:w-1/3 rounded-lg bg-gray-600 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <RestoreOutlinedIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Internships</h2>
                </div>
                 <p className='text-gray-300 font-bold my-2'>Information Technology Institute (ITI) Cairo University</p>
                 <p className='text-gray-400 font-bold'>Mearn Stack Track (4 months)</p>
                </span>
                <span className="h-52 w-full lg:w-1/3 rounded-lg bg-gray-600 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <TranslateOutlinedIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Languages</h2>
                </div>
                 <p className='text-gray-300 font-bold my-2'>English (Highly proficient)</p>
                 <p className='text-gray-300 font-bold my-2'>Arabic (Native)</p>
                </span>
            </div>
            <span className="w-full rounded-lg bg-gray-600 p-8">
                <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 bg-cyan-700 rounded-full flex justify-center items-center'>
                    <PersonOutlineOutlinedIcon className='text-cyan-400 '/>
                    </div>
                    <h2 className='text-white text-xl font-bold'>Personal Information</h2>
                </div>
                 <p className='text-gray-300 font-bold my-2'>Military Status: Exempted</p>
                </span>
                <a href="#skills" target="_self" className='absolute bottom-4 left-1/2 animate-bounce'>
                   <ArrowDownwardIcon fontSize='medium' className="text-white hover:text-cyan-400 transition-all duration-300 ease-in-out"/>
                </a>
        </section>
    );
}

export default About;