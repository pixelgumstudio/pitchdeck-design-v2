"use client"
import React, { useState } from "react";
import HeroSection from "../../component/free-tools/HeroSection";
import OtherSection from "../../component/free-tools/OtherSection";
import ToolsForm from "../../component/free-tools/Forms/ToolsForm";
import SubmitForm from "../../component/free-tools/Forms/SubmitForm";

type PolicyData = Record<string, string | number | boolean | null | undefined>;
type PolicyErrors = Record<string, string>;

export default function PageFile() {
  const [data, setData] = useState<PolicyData>({});
  const [errors, setErrors] = useState<PolicyErrors>({});

  const type = "Privacy Policy";

  const getResponse = (res: PolicyData) => {
    setData(res);
  };
  const getError = (res: PolicyErrors) => {
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
