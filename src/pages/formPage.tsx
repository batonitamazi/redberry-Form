import React, { useState } from 'react'
import Pagination from '../components/pagination'
import PersonalInfoForm from '../components/personalInformation/PersonalInfoForm'
import PersonalInfoParagraph from '../components/personalInformation/PersonalInfoPageParagraph'
import { useNavigate } from 'react-router-dom'
import TechSkillForm from '../components/techSkill/techSkillForm'
import TechSkillParagraph from '../components/techSkill/techSkillParagraph'
import CovidStuffForm from '../components/covidStuff/covidStufForm'
import CovidStuffParagraph from '../components/covidStuff/covidStuffParagraph'
import RedberrianInsightForm from '../components/redberrianInsight/redberrianInsightForm'
import RedberrianInsightParagraph from '../components/redberrianInsight/redberrianInsightParagraph'


const steps = [
  {
    active: true,
    componentform: <PersonalInfoForm />,
    componentparagraph: <PersonalInfoParagraph />,
    canNavigateBack: false
  },
  {
    active: true,
    componentform: <TechSkillForm />,
    componentparagraph: <TechSkillParagraph />,
    canNavigateBack: false
  },
  {
    active: true,
    componentform: <CovidStuffForm />,
    componentparagraph: <CovidStuffParagraph />,
    canNavigateBack: false
  },
  {
    active: true,
    componentform: <RedberrianInsightForm />,
    componentparagraph: <RedberrianInsightParagraph />,
    canNavigateBack: false
  },

]



function FormPage() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)


  const nextStep = (
    event: React.MouseEvent<HTMLButtonElement> | null
  ) => {
    if (activeIndex === 3) {
      navigate('/submit')
    } else if (activeIndex <= 3) {
      setActiveIndex(activeIndex + 1)
      // navigate(`${}`);
    }
  }

  const backStep = (
    event: React.MouseEvent<HTMLButtonElement> | null
  ) => {
    if (activeIndex) {
      setActiveIndex(activeIndex - 1)
    } else if (activeIndex === 0) {
      navigate('/');
    }
  }
  return (
    <div className='flex flex-row w-full h-screen'>
      <div className='bg-white w-full  flex flex-col items-center'>
        {/* <PersonalInfoForm /> */}
        {steps[activeIndex].componentform}
        <div className='pt-10'>
          <Pagination
            steps={steps}
            nextStep={nextStep}
            backStep={backStep}
            activeindex={activeIndex}
          />
        </div>
      </div>
      <div className='flex flex-col bg-black w-full  items-center '>
        {steps[activeIndex].componentparagraph}
      </div>
    </div>
  )
}

export default FormPage