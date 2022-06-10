import React from 'react'
import '../App.css';



interface paginationProps  {
  steps?:  [] | any,
  nextStep?: Function | any,
  backStep?: Function | any,
  activeindex?: boolean | any, 

}


function Pagination(props: paginationProps) {
  const {steps, nextStep, backStep, activeindex} = props
  return (
    <div className='flex flex-row '>
      <div className=' group rounded-full border-2 border-red-600 bg-white w-6 h-6 cursor-pointer hover:bg-red-600' onClick={backStep}>
        <div className='ml-1.5 mt-1.5 border border-red-600 w-2 bg-red-600 -rotate-45 group-hover:border-white bg-slate-50'></div>
        <div className='mt-0.5 ml-1.5 border border-red-600 w-2 bg-red-600 rotate-45 group-hover:border-white bg-slate-50'></div>
      </div>
      <div className='flex flex-row'>
        {steps.map((item: any, index: React.Key | null | undefined) => {
          return <div className={'bubbles ' + (activeindex === index ? 'active' : undefined)}
            key={index} 
          >
          </div>
        })} 
      </div>
      <div className='group rounded-full border-2 border-red-600 bg-white w-6 h-6 cursor-pointer hover:bg-red-600' onClick={nextStep}>
        <div className=' ml-1.5 mt-1.5 border border-red-600 w-2 bg-red-600 rotate-45 group-hover:border-white bg-slate-50'></div>
        <div className=' mt-0.5 ml-1.5 border border-red-600 w-2 bg-red-600 -rotate-45 group-hover:border-white bg-slate-50'></div>
      </div>
    </div>  
  )
}

export default Pagination