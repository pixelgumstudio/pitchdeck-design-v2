import HeroSection from '../../component/free-tools/HeroSection';
import OtherSection from '../../component/free-tools/OtherSection';
import ToolsForm from '../../component/free-tools/Forms/ToolsForm';
import SubmitForm from '../../component/free-tools/Forms/SubmitForm';
import { useState } from 'react';


export default function PageFile() {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({});

  const type = "Terms and Condition"
  

    const getResponse =(res)=>{
      setData(res)
        }
        const getError =(res)=>{
          setErrors(res)
        }

  return (
    <div>
<HeroSection title={type} link='terms'/>
<ToolsForm formType={type} response={getResponse} error={errors}/>
<SubmitForm  data={data} sendError={getError}/>
<OtherSection  page='terms'/>
    </div>
  )
}
