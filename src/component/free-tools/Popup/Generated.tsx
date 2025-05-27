"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonStyles } from "../../classes/styles";
import { useRouter } from "next/navigation";

type GeneratedProps = {
  open: boolean;
  data: { formType: string; content?: string };
  content: string;
  type: string;
};

const Generated: React.FC<GeneratedProps> = ({ open, data, content, type }) => {
  const [show, setShow] = useState(false);
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  useEffect(() => {
    setTextToCopy(content);
    setShow(open);
  }, [content, open]);

  const close = () => {
    setShow(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCopy(event.target.value);
  };

  const reset = () => {
    setShow(false);
    router.push(`/generate-${type}`);
  };

  return (
    show && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
          <Image
            src={"/assets/cancel.svg"}
            alt="Close"
            width={24}
            height={24}
            className="mr-0 ml-auto w-6 h-6 cursor-pointer"
            onClick={close}
          />
          <div>
            <Image src={"/assets/Pitchdeck Logo.svg"} alt="Logo" width={120} height={24} className="w-fit h-6 mb-4" />
            <p className="text-[#0B0B00] text-24 font-bold">
              Your {data.formType} has been generated successfully
            </p>
          </div>
          {/* Generated Content */}
          <div className="relative ">
            <textarea
              value={textToCopy}
              onChange={handleChange}
              placeholder="Type something..."
              className="border border-[#E8E8EA] py-2 px-3 text-[#141415] text-14 w-full min-h-[200px] h-full"
            />
            {isCopied && <span className="absolute top-2 right-2">Copied!</span>}
          </div>
          <div className="flex flex-col tablet:flex-row gap-6 ">
            <div
              onClick={handleCopy}
              className={`${buttonStyles} w-full tablet:w-fit inline-flex items-center justify-center py-[6px] cursor-pointer`}
            >
              <Image src={"/assets/copy.svg"} alt="Copy content" width={20} height={20} className="w-5 h-5 mr-1" />
              <span className="text-[#0B0B00] text-14 font-medium">
                Copy content
              </span>
            </div>
            {/* <p className={`${buttonStyles('green')} w-full tablet:w-fit`}>
              Download {data.formType}
            </p> */}
          </div>
          <p
            className="text-[#10894E] text-14 font-medium underline cursor-pointer"
            onClick={reset}
          >
            Make another {data.formType} agreement
          </p>
          <div className="border-t border-t-[#DEDEE0] py-6 ">
            <p className="text-[#0B0B00] text-20 font-bold">
              Check out our other products
            </p>
            <p className="mb-6 text-[#59595C] text-14">
              We created the largest pitch deck library to find inspiration,
              purchase pitch deck templates and make pitchdecks yourself
            </p>
            <div className="grid tablet:grid-cols-2 gap-x-6 gap-y-2 w-full tablet:w-fit text-center">
              <Link
                href="/"
                className="text-[#0B0B00] text-14 font-medium border border-[#E8E8EA] hover:bg-[#F9F9F9] shadow-buttonDefault px-2 py-[6px] w-full tablet:w-fit cursor-pointer"
              >
                Checkout pitchdecks
              </Link>
              <Link
                href="/template"
                className="text-[#0B0B00] text-14 font-medium border border-[#E8E8EA] hover:bg-[#F9F9F9] shadow-buttonDefault px-2 py-[6px] w-full tablet:w-fit cursor-pointer"
              >
                Purchase Templates
              </Link>
              <Link
                href="/make-deck"
                className="text-[#0B0B00] text-14 font-medium border border-[#E8E8EA] hover:bg-[#F9F9F9] shadow-buttonDefault px-2 py-[6px] w-full tablet:w-fit cursor-pointer"
              >
                Make a pitchdeck
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Generated;