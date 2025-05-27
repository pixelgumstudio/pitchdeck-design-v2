"use client"
import React, { useState } from "react";
import HeroSection from "../../component/free-tools/HeroSection";
import OtherSection from "../../component/free-tools/OtherSection";
import ToolsForm from "../../component/free-tools/Forms/ToolsForm";
import SubmitForm from "../../component/free-tools/Forms/SubmitForm";

type RefundData = Record<string, string | number | boolean | null | undefined>;
type RefundErrors = Record<string, string>;

export default function PageFile() {
  const [data, setData] = useState<RefundData>({});
  const [errors, setErrors] = useState<RefundErrors>({});

  const type = "Refund Policy";

  const getResponse = (res: RefundData) => {
    setData(res);
  };
  const getError = (res: RefundErrors) => {
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
