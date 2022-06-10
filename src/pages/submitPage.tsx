import React from 'react'
import { useNavigate } from 'react-router-dom'

function SubmitPage() {
    const navigate = useNavigate()
    return (
        <div className='bg-black w-full h-screen flex flex-col items-center justify-evenly '>
            <div className='mt-5 flex flex-col items-center justify-between'>
                <button className='m-4 bg-red-600 w-96 h-12 text-2xl font-normal rounded-3xl text-gray-300 font-montserrat text-center  hover:bg-red-700'
                    onClick={() => navigate('/thanks-page')}
                >
                    Submit
                </button>
                <a className='text-slate-300 cursor-pointer font-montserrat hover:underline decoration-solid'
                    onClick={() => navigate('/form')}>
                    Go back
                </a>
            </div>
        </div>
    )
}

export default SubmitPage