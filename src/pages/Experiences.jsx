import { useSelector } from "react-redux";

const Experiences = () => {
   const experience = useSelector((state) => state.experience);
   return (
      <div id="experiences">
         <div id="title">
            <h1 className='text-2xl font-semibold'>Experiences</h1>
            <hr className='my-3 border w-[20%]' />
         </div>
         <div id="cardContent" className="flex flex-col gap-4 mb-20 md:grid md:grid-cols-4 md:gap-4">
            {
               experience.map((expe, index) => {
                  return (
                     <div key={index} id="card" className='bg-white shadow-sm rounded-md p-3 border'>
                        <h2 className='text-base font-bold'>{expe.job}</h2>
                        <h5 className='text-sm font-semibold'>{expe.company}</h5>
                        <hr className="my-2" />
                        <p className='text-xs italic'>{expe.date}</p>
                        <p className='text-xs'>{expe.location}</p>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Experiences