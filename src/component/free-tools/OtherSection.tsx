import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardsProps = {
  img: string;
  title: string;
  link: string;
};

const Cards: React.FC<CardsProps> = ({ img, title, link }) => (
  <div>
    <Image src={img} alt={`${title} icon`} width={60} height={60} className="mb-6" />
    <p className="mb-2 text-[#000] text-16 tablet:text-20 laptop::text-32 font-bold ">
      {title} agreement
    </p>
    <p className="mb-6 text-[#414143] text-16 lowercase w-[90%]">
      Generate a free {title} for your website in seconds.
    </p>
    <Link
      href={`/generate-${link}`}
      className="p-2 px-3 text-[#0B0B00] text-center text-14 font-medium border border-[#E8E8EA] bg-tools-button shadow-buttonDefault"
    >
      Generate {title}
    </Link>
  </div>
);

type OtherSectionProps = {
  page: string;
};

const OtherSection: React.FC<OtherSectionProps> = ({ page }) => {
  return (
    <div
      id="presentation"
      className="w-full laptop:max-w-[951px] mx-auto px-4 tablet:px-6 laptop:px-0 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]"
    >
      <div className="w-full">
        <h2 className="text-[#000] text-24  tablet:text-32 laptop:text-48 font-bold mb-3">
          Checkout our other tools
        </h2>
        <p className="text-[#414143] text-16 tablet:text-20 ">
          We provide tools tailored to help your business succeed, feel free to
          use our other tools to improve your business process
        </p>
        <div className="mt-[60px] flex flex-col gap-6 laptop:flex-row laptop:justify-between">
          {page === "policy" ? (
            <>
              <Cards img={"/assets/refund.svg"} title="Refund policy" link="refund" />
              <Cards img={"/assets/terms.svg"} title="Terms and conditions" link="terms" />
            </>
          ) : page === "terms" ? (
            <>
              <Cards img={"/assets/privacy.svg"} title="Privacy policy" link="policy" />
              <Cards img={"/assets/refund.svg"} title="Refund policy" link="refund" />
            </>
          ) : (
            <>
              <Cards img={"/assets/privacy.svg"} title="Privacy policy" link="policy" />
              <Cards img={"/assets/terms.svg"} title="Terms and conditions" link="terms" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherSection;
