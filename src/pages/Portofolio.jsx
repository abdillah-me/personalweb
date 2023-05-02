import { FaGithub } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Portofolio = () => {
   const portfolio = useSelector((state) => state.portofolio);
   return (
      <div id="portofolio">
         <div id="title">
            <h1 className='text-2xl font-semibold'>Portofolio</h1>
            <hr className='my-3 border w-[20%]' />
         </div>
         <div id="contentCard" className='flex flex-col gap-4 mb-20 md:grid md:grid-cols-4 md:gap-4'>
            {
               portfolio.map((porto, index) => {
                  return (
                     <div key={index} id="card" className='flex items-center bg-white shadow-sm rounded-md p-2 gap-4 border'>
                        <div id="imgCard" className='w-2/4'>
                           <img className='rounded-md object-cover' src={porto.image} alt="" />
                        </div>
                        <div id="title" className='w-2/4'>
                           <h2 className='text-base font-bold'>{porto.name}</h2>
                           <h5 className='text-sm mt-2'>Tech stack : <span>{porto.stack}</span> </h5>
                           <hr className='my-2' />
                           <div id="actions" className='flex gap-2'>
                              <FaGithub className='text-2xl' />
                              <BsLink45Deg className='text-2xl' />
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Portofolio