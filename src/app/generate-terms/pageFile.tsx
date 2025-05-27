"use client"
import HeroSection from '../../component/free-tools/HeroSection';
import OtherSection from '../../component/free-tools/OtherSection';
import ToolsForm from '../../component/free-tools/Forms/ToolsForm';
import SubmitForm from '../../component/free-tools/Forms/SubmitForm';
import { useState } from 'react';


type TermsData = Record<string, string | number | boolean | null | undefined>;
type TermsErrors = Record<string, string>;

export default function PageFile() {
  const [data, setData] = useState<TermsData>({});
  const [errors, setErrors] = useState<TermsErrors>({});

  const type = "Terms and Condition";

  const getResponse = (res: TermsData) => {
    setData(res);
  };
  const getError = (res: TermsErrors) => {
    setErrors(res);
  };

  return (
    <div>
      <HeroSection title={type} link="terms" />
      <ToolsForm formType={type} response={getResponse} error={errors} />
      <SubmitForm data={data} sendError={getError} />
      <OtherSection page="terms" />
    </div>
  );
}
