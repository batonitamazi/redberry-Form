import React from 'react'

function CovidStuffForm() {
    return (
        <div className='flex flex-col items-left'>

            <h1 className='pt-24 pl-10 font-normal text-left text-5xl font-rowdies text-red-600 '>
                Covid Stuff
            </h1>
            <div className='pt-16 flex flex-col '>
                <p>how would you prefer to work?</p>
                <div className='mt-4 flex flex-row items-center'>
                    <input type='radio' id="sairme" name='skills' value='Sairme' />
                    <label htmlFor='sairme'>From Sairme Office</label>
                </div>
                <div className='mt-2 flex flex-row items-center'>
                    <input type='radio' id="home" name='skills' value='Home' />
                    <label htmlFor='home'>From Home</label>
                </div>

                <div className='mt-2 flex flex-row items-center '>
                    <input type='radio' id="hybrid" name='skills' value='hybrid' />
                    <label htmlFor='hybrid'>Hybrid</label>
                </div>
            </div>
            <div className='pt-16 flex flex-col'>
                <p>Did you contact covid 19? :(</p>
                <div className='mt-2 flex flex-row items-center'>
                    <input type='radio' id="yes" name='skills' value='yes' />
                    <label className='ml-1' htmlFor='yes'>Yes</label>
                </div>
                <div className='mt-2 flex flex-row items-center '>
                    <input type='radio' id="no" name='skills' value='no' />
                    <label className='ml-1' htmlFor='no'>no</label>
                </div>
            </div>
            <div className='pt-8 flex flex-col'>
                <p>Where?</p>
                <label className='block'>
                    <input type='date' className='block h-10 w-96 border-2 border-slate-400  text-slate-600 font-montserrat italic' placeholder='Date' />
                </label>
            </div>
            <div className='pt-16 flex flex-col'>
                <p>Have you vaccinated</p>
                <div className='mt-2 flex flex-row items-center'>
                    <input type='radio' id="yes" name='skills' value='yes' />
                    <label className='ml-1' htmlFor='yes'>Yes</label>
                </div>
                <div className='mt-2 flex flex-row items-center '>
                    <input type='radio' id="no" name='skills' value='no' />
                    <label className='ml-1' htmlFor='no'>no</label>
                </div>
            </div>
            <div className='pt-8 flex flex-col'>
                <p> When did you get your last covid vaccine?</p>
                <label className='block'>
                    <input type='date' className='block h-10 w-96 border-2 border-slate-400  text-slate-600 font-montserrat italic' placeholder='Date' />
                </label>
            </div>

        </div>
    )
}

export default CovidStuffForm