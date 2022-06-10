import React, { useEffect, useState } from 'react'
import { skillService } from '../../models/skills/service'
import { Skill } from '../../models/skills/skill'

function TechSkillForm() {
  const [skills, setSkills] = useState<Skill | any>()

  const getSkills = () => {
    skillService.list().then((resp: any) => {
      setSkills(resp.results)
    })
  }
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <h1 className='pt-24 pl-10 font-normal text-left text-5xl font-rowdies text-red-600 '>
        Tell us about your skills
      </h1>
      <div className='pt-16'>
        <label className='relative block'>
          <input list='skills' className='block h-14 w-96 border-2 border-slate-400 pl-6 text-slate-600 font-montserrat italic' placeholder='Skills'
          />
          <datalist id='skills'>
            {skills && skills.map((skill: any, index: any) => {
              return <option value={skill.title} key={index} />
            })}
          </datalist>
        </label>
        <label className='block pt-8'>
          <input className='block h-14 w-96 border-2 border-slate-400 pl-6 text-slate-600 font-montserrat italic' placeholder='Experience Duration in years'
          />
        </label>
      </div>
      <button className='m-4 ml-44 bg-red-600 w-52 h-10 text-xs  text-white   font-montserrat text-center  hover:bg-red-700'

      >
        Add Programming Language
      </button>

    </>
  )
}

export default TechSkillForm