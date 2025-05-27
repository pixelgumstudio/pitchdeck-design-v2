/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Generated from "../Popup/Generated";
import { buttonStyles } from "../../classes/styles";
import axios from "../../../lib/axios";
import { useStore } from "../../../store/useStore";
import Loading from "../../LoadingComponent";

type SubmitFormProps = {
  data: Record<string, any>;
  sendError: (errors: Record<string, string>) => void;
};

export default function SubmitForm({ data, sendError }: SubmitFormProps) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");

  const { setIsComponentLoading } = useStore();

  const sendData = async () => {
    try {
      setIsComponentLoading(true);
      if (data.formType === "Terms and Condition") {
        setType("terms");
        const response = await axios.post(
          "/freeTools/termsAndCond",
          data,
          { headers: { "Content-Type": "application/json" } }
        );
        setOpen(true);
        setContent(response.data.content);
      } else if (data.formType === "Privacy Policy") {
        setType("policy");
        const response = await axios.post(
          "/freeTools/privacypolicy",
          data,
          { headers: { "Content-Type": "application/json" } }
        );
        setOpen(true);
        setContent(response.data.content);
      } else if (data.formType === "Refund Policy") {
        setType("refund");
        const response = await axios.post(
          "/freeTools/refundpolicy",
          data,
          { headers: { "Content-Type": "application/json" } }
        );
        setOpen(true);
        setContent(response.data.content);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // handle error if needed
    } finally {
      setIsComponentLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const errors = validate(data);
    if (Object.keys(errors).length === 0) {
      sendData();
    } else {
      sendError(errors);
    }
  };

  const validate = (data: Record<string, any>) => {
    const errors: Record<string, string> = {};

    if (!data.websiteAddress) {
      errors.websiteAddress = "Website is required";
    } else if (!isValidUrl(data.websiteAddress)) {
      errors.websiteAddress = "Invalid website URL";
    }

    if (!data.companyName) {
      errors.companyName = "Company Name is required";
    }

    if (!data.companyAddress) {
      errors.companyAddress = "Company Address is required";
    }

    if (!data.country) {
      errors.country = "Country is required";
    }
    if (!data.state) {
      errors.state = "State is required";
    }
    if (!data.city) {
      errors.city = "City is required";
    }
    if (!data.productName) {
      errors.productName = "Product is required";
    }
    if (!data.generateTemplateIn) {
      errors.generateTemplateIn = "Select download format";
    }
    if (!data.contactEmailAddress) {
      errors.contactEmailAddress = "Email is required";
    } else if (!isValidEmail(data.contactEmailAddress)) {
      errors.contactEmailAddress = "Invalid email address";
    }
    return errors;
  };

  const isValidUrl = (url: string) => {
    return /\./.test(url);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="w-full max-w-[758px] mx-auto px-4 laptop:px-0  tablet:grid tablet:grid-cols-2 tablet:gap-x-8 mt-[-40px] tablet:mt-[-80px] laptop:mt-[-100px]">
        <button
          className={`${buttonStyles("green")} w-full col-span-full my-10 py-[14px]`}
          onClick={handleSubmit}
        >
          Generate {data.formType} <Loading />
        </button>

        <div className="w-full col-span-full p-4 border border-[#70CC9F] bg-[#F7FCF9]">
          <p className="text-14 text-[#10894E]">
            The generated <span className="lowercase">{data.formType}</span>
            is provided &apos;as is&apos; and without warranty of any kind. In no way
            pixelgum.design shall be liable for any claim, damages, or other
            liability. Use it at your own risk. And Make sure to get legal
            advice from legal professionals.
          </p>
        </div>
      </div>
      <Generated open={open} data={data as { formType: string; content?: string }} content={content} type={type} />
    </>
  );
}