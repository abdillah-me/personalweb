import { Link, Outlet } from "react-router-dom"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaUserCircle, FaBookOpen, FaLayerGroup, FaSwatchbook } from 'react-icons/fa'

const Layouts = () => {
   return (
      <div className='bg-white'>
         <section className="min-h-screen">
            {/* navbar */}
            <nav className='sticky bg-white top-0 left-0 right-0 shadow-md px-5'>
               <div className="menu py-5 mb-5 flex justify-between items-center">
                  <h1 className='text-base font-semibold'>Abdillah</h1>
                  <div className="menuList flex items-center gap-4">
                     <ul className='hidden md:flex md:items-center md:gap-5'>
                        <Link to={'/'}>
                           <li className='cursor-pointer hover:text-teal-500'>About</li>
                        </Link >
                        <Link to={'/education'}>
                           <li className='cursor-pointer hover:text-teal-500'>Education</li>
                        </Link>
                        <Link to={'/experience'}>
                           <li className='cursor-pointer hover:text-teal-500'>Experience</li>
                        </Link>
                        <Link to={'/portofolio'}>
                           <li className='cursor-pointer hover:text-teal-500'>Portofolio</li>
                        </Link>
                     </ul>
                     <ul className='flex items-center'>
                        <li>
                           <BsFillMoonStarsFill className='cursor-pointer text-xl' />
                        </li>
                        <li >
                           <a href="#" className='bg-teal-500 py-2 px-4 rounded-md text-white text-sm ml-5'>Resume</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            {/* content */}
            <div className="mx-5">
               <Outlet />
            </div>
            {/* navtab */}
            <div id="bottomNav" className='bg-white py-2 border-t fixed w-full bottom-0 rounded-xl md:hidden'>
               <div id="menu" className='flex justify-around items-center'>
                  <Link to={'/'}>
                     <div id="about" className='flex flex-col items-center'>
                        <FaUserCircle className='text-xl text-slate-700' />
                        <span className='text-[10px] mt-1'>About</span>
                     </div>
                  </Link>
                  <Link to={'/education'}>
                     <div id="education" className='flex flex-col items-center'>
                        <FaBookOpen className='text-xl text-slate-700' />
                        <span className='text-[10px] mt-1'>Education</span>
                     </div>
                  </Link>
                  <Link to={'/experience'}>
                     <div id="experience" className='flex flex-col items-center'>
                        <FaLayerGroup className='text-xl text-slate-700' />
                        <span className='text-[10px] mt-1'>Experience</span>
                     </div>
                  </Link>
                  <Link to={'/portofolio'}>
                     <div id="experience" className='flex flex-col items-center'>
                        <FaSwatchbook className='text-xl text-slate-700' />
                        <span className='text-[10px] mt-1'>Portofolio</span>
                     </div>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Layouts