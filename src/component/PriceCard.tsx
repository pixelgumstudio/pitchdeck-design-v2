import Image from "next/image";

type Product = {
  icon: string;
  plan: string;
  heading: string;
  price: number | string;
  link: string;
  active: boolean;
  color: string;
  benefits: string[];
};

type PriceCardProps = {
  product: Product;
};

export const PriceCard: React.FC<PriceCardProps> = ({ product }) => {
  return (
    <div
      className={`w-full max-w-[500px] mx-auto basis-1/3 border border-[#D2D2CF] ${
        product.color === "green"
          ? "bg-[#061F13] text-white"
          : "bg-[#F8F8F1] text-[#2E2E27]"
      }`}
    >
      <div className="bg-[#FFF]  p-5">
        <Image src={product.icon} alt="" width={40} height={40} className="w-10 h-10" />
        <h3 className="mt-4 mb-1 text-[24px] font-bold leading-8 tracking-[-0.96px] text-[#0B0B00]">
          {product.plan}
        </h3>
        <p className="text-14 text-[#59595C]">{product.heading}</p>
      </div>
      <div className={`p-5`}>
        <h2 className="mt-8 mb-1 text-[#0B0B00] text-48 font-bold">
          ${product.price}
          <span className="text-24 font-normal">/Pitch deck</span>
        </h2>
        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className={`w-full my-6 rounded-lg hover:bg-[#21AB68] hover:border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2 hover:text-[#ffffff] ${
            product.active
              ? "text-[#ffffff] bg-[#21AB68] border-[#21AB68]"
              : "text-[#0B0B00] bg-white border-[#E8E8EA]"
          } font-sm leading-5 font-medium focus:outline-none`}
        >
          Make a pitch deck
        </a>
        <ul className={` border-[#D5DDDC] flex flex-col gap-3`}>
          <p className="tex-[#0B0B00] font-semibold">WHAT YOU GET</p>
          {product.benefits.map((benefit, i) => (
            <li
              key={i}
              className={`pl-8 bg-left bg-[length:20px] bg-no-repeat text-14 tablet:leading-7 ${
                product.color === "bg-[#21AB68]"
                  ? "bg-[url(/assets/Check icons.svg)]"
                  : "bg-[url(/assets/Check icons.svg)]"
              }`}
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SupportCard: React.FC = () => {
  return (
    <div className="w-full laptop:flex-row laptop:justify-between mt-10 max-w-[760px] mx-auto p-8 border border-[#E3E3E2] bg-[#FFFFFF] text-[#2E2E27] text-center flex flex-col justify-center items-center">
      <div className="flex flex-col laptop:flex-row w-fit laptop:justify-start items-center gap-6">
        <div className="w-[80px] h-[80px]">
          <Image alt="Telephone" src={"/assets/phone.png"} width={80} height={80} />
        </div>
        <div className="w-full laptop:w-[393px] laptop:text-left">
          <h3 className="mb-2 text-[24px] font-bold leading-8 tracking-[-0.96px]">
            Have any questions?
          </h3>
          <p className="text-[#64645F] text-[16px] leading-6 tablet:text-[20px] tablet:leading-7">
            Learn more about how pitchdeck.design works and how it can help you.
          </p>
        </div>
      </div>
      <div className="subcribe_button whitespace-nowrap my-8 shadow-supportButton bg-tools-button border border-[#E8E8EA] hover:text-[#FFFFFF] hover:bg-[#21AB68] hover:border-#21AB68] inline-flex items-center justify-center p-2 text-[#0B0B00]  font-sm leading-5 font-medium focus:outline-none ">
        <a
          href="https://cal.com/olayanjuidris/pptdesignercall"
          target="_blank"
          rel="noreferrer"
        >
          Schedule a call
        </a>
      </div>
    </div>
  );
};