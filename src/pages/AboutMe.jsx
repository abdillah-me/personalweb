import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { useSelector } from 'react-redux';
const AboutMe = () => {
   const about = useSelector((state) => state.about);
   return (
      <div>
         <div id='heroSection' className='text-center'>
            <h2 className='font-semibold text-2xl text-teal-600'>Hallo, I&apos;m <span>{about[0].name}</span></h2>
            <h3 className='font-medium text-base'>{about[0].role}</h3>
            <hr className='my-2 md:my-3' />
            <p className='text-sm text-justify text-gray-800 my-2 md:w-[50%] md:mx-auto md:text-center'>
               {about[0].information}
            </p>
         </div>
         <div className='text-4xl flex my-2 justify-center gap-7 text-gray-600 md:my-5'>
            <AiFillLinkedin className='cursor-pointer' />
            <AiFillInstagram className='cursor-pointer' />
            <AiFillGithub className='cursor-pointer' />
         </div>
         <div className='bg-teal-500 relative rounded-full w-60 h-60 overflow-hidden mx-auto mt-6 md:w-96 md:h-96'>
            <img src={about[0].image} alt="" className='object-cover' />
         </div>
      </div>
   )
}

export default AboutMe