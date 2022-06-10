import React from 'react'
import { useNavigate } from 'react-router-dom'
function RocketerPage() {
  const navigate = useNavigate()
  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-evenly ' style={{ backgroundImage: `url(/images/stars.png)` }}>
      <h1 className='font-rowdies text-8xl text-red-600 text-center pt-20'>
        Welcome Rocketeer!
      </h1>
      <div className='mt-5 flex flex-col items-center justify-between'>
        <button className='m-4 bg-red-600 w-96 h-12 text-2xl rounded-3xl text-gray-300 font-montserrat text-center  hover:bg-red-700'
          onClick={() => navigate('form')}>
          Start Questionnaire
        </button>
        <a className='text-slate-300 cursor-pointer font-montserrat hover:underline decoration-solid'
          onClick={() => navigate('/submitted-applications')}
        >
          Submitted Applications
        </a>  
      </div>
      <img src='images/rocketman.png' className='w-96 h-96' />

    </div>

  )
}

export default RocketerPage

// <div className="m-0 flex flex-col justify-evenly items-center  bg-black  w-full h-full" >
    //   <div className='flex pt-10 basis-1/2 items-center'>
    //     <h1 className='font-normal text-8xl font-rowdies text-red-600 '>
    //       Welcome Rocketeer!
    //     </h1>
    //   </div>
    //   <div className='flex-1 '>
    //     <button className='m-8 basis-1/4 w-72 h-11 bg-red-600 rounded-3xl text-slate-300 hover:bg-red-700 font-montserrat'
    //     onClick={() => navigate('personal-information')}
    //     >
    //       Start Questionnaire
    //     </button>
    //   </div>
    //   <div className='text-slate-300 cursor-pointer font-montserrat underline decoration-solid '>
    //     submitted Applications
    //   </div>
    //   <div className='bg-auto	basis-1/8'>
    //     <img src='images/rocketman.png' alt='' className='bg-auto' />
    //   </div>


    // </div>