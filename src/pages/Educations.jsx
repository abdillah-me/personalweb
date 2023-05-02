import { useSelector } from 'react-redux'
const Educations = () => {
   const education = useSelector((state) => state.education);
   console.log(education)
   return (
      <div id="education" className='flex flex-col gap-4'>
         <div id="title">
            <h1 className='text-2xl font-semibold'>Educations</h1>
            <hr className='my-3 border w-[20%]' />
         </div>
         <div id="cardContent" className='flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-4'>
            {
               education.map((edu, index) => {
                  return (
                     <div key={index} id="card" className='flex items-center bg-white shadow-sm rounded-md p-2 gap-4 border'>
                        <div id="imgCard" className='w-1/4'>
                           <img className='' src={edu.image} alt="" />
                        </div>
                        <div id="title" className='w-3/4'>
                           <h2 className='text-base font-bold'>{edu.name}</h2>
                           <h5 className='text-sm'>{edu.role}</h5>
                           <span className='text-xs'>{edu.date}</span>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Educations