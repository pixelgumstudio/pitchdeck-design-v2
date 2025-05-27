import React, { useState } from "react";
import HeroSection from "../../component/free-tools/HeroSection";
import OtherSection from "../../component/free-tools/OtherSection";
import ToolsForm from "../../component/free-tools/Forms/ToolsForm";
import SubmitForm from "../../component/free-tools/Forms/SubmitForm";

export default function PageFile() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const type = "Privacy Policy";

  const getResponse = (res) => {
    setData(res);
  };
  const getError = (res) => {
    setErrors(res);
  };
  return (
    <div>
      <HeroSection title={type} link="policy" />
      <ToolsForm formType={type} response={getResponse} error={errors} />
      <SubmitForm data={data} sendError={getError} />
      <OtherSection page="policy" />
    </div>
  );
}
