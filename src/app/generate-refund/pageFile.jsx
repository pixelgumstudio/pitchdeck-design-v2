import React, { useState } from "react";
import HeroSection from "../../component/free-tools/HeroSection";
import OtherSection from "../../component/free-tools/OtherSection";
import ToolsForm from "../../component/free-tools/Forms/ToolsForm";
import SubmitForm from "../../component/free-tools/Forms/SubmitForm";

export default function PageFile() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const type = "Refund Policy";

  const getResponse = (res) => {
    // console.log(res)
    setData(res);
    //  const res = {
    //    city, companyAddress, companyName, contactEmailAddress, country, product, selectedType, state, websiteAddress,
    //  };
  };
  const getError = (res) => {
    setErrors(res);
  };

  return (
    <div>
      <HeroSection title={type} link="refund" />
      <ToolsForm formType={type} response={getResponse} error={errors} />
      <SubmitForm data={data} sendError={getError} />
      <OtherSection page="refund" />
    </div>
  );
}
