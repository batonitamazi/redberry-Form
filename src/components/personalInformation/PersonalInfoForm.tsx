import React from 'react'

function PersonalInfoForm() {
    return (
        <>
            <h1 className='pt-24 pl-10 font-normal text-left text-5xl font-rowdies text-red-600 '>
                 Hey, Rocketeer, what Are your Coordinates
            </h1>
            <div className='pt-16'>
                <label className='block '>
                    <input className='block h-14 w-96 border-2 border-slate-400 pl-6 text-gray-400 font-montserrat italic' placeholder='First Name' />
                </label>
                <label className='block pt-8'>
                    <input className='block h-14 w-96 border-2 border-slate-400 pl-6 text-gray-400 font-montserrat italic' placeholder='Last Name' />
                </label>
                <label className='block pt-8'>
                    <input className='block h-14 w-96 border-2 border-slate-400 pl-6 text-gray-400 font-montserrat italic' placeholder='E Mail' />
                </label>
                <label className='block pt-8'>
                    <input className='block h-14 w-96 border-2 border-slate-400 pl-6 text-gray-400 font-montserrat italic' placeholder='+995 5_ _ _ _ _' />
                </label>
            </div>
        </>

    )
}

export default PersonalInfoForm