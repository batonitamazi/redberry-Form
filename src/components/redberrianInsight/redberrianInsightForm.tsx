import React from 'react'

function RedberrianInsightForm() {
  return (
    <div className='flex flex-col items-left'>
      <h1 className='pt-24 pl-10 font-normal text-left text-5xl font-rowdies text-red-600 '>
        What about you?
      </h1>
      <div className='pt-16 flex flex-col'>
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <div className='mt-2 flex flex-row items-center'>
          <input type='radio' id="yes" name='skills' value='yes' />
          <label className='ml-1' htmlFor='yes'>Yes</label>
        </div>
        <div className='mt-2 flex flex-row items-center '>
          <input type='radio' id="no" name='skills' value='no' />
          <label className='ml-1' htmlFor='no'>no</label>
        </div>
      </div>
      <div className='pt-2'>
        <label className='block pt-8'>What would you speak about at Devtalk?
          <input className='flex flex-start block h-24 w-96 border-2 border-slate-400 pl-6 text-slate-600 font-montserrat italic' placeholder='I would...' />
        </label>
      </div>
      <div className='pt-2'>
        <label className='block pt-8'>Tell us something special
          <input className='block h-20 w-96 border-2 border-slate-400 pl-6 text-slate-600 font-montserrat italic' placeholder='I...' />
        </label>
      </div>
    </div>
  )
}

export default RedberrianInsightForm