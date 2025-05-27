type FaqItem = {
  question: string;
  answer: string;
};

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is Pitchdeck design?",
      answer:
        "Pitchdeck design helps your business create standout pitch decks and presentations. These decks are designed to help businesses raise money. Find inspiration from 1,000+ pitch decks, and purchase templates to help grow your business.",
    },
    {
      question: "Who is this for?",
      answer:
        "Pitchdeck design is for companies and founders struggling to create effective pitch decks. If you need professional help with design, pitch deck inspirations, or you just want to purchase templates, we're the right fit.",
    },
    {
      question: "Can you incorporate branding elements into the pitch deck design?",
      answer:
        "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity.",
    },
    {
      question: "Which payment options and currencies do you accept?",
      answer:
        "We accept all currencies via credit card and bank payments through Lemon Squeezy. Contact us if you need alternative payment methods!",
    },
    {
      question: "How long does it take to create a pitch deck design?",
      answer:
        "The timeline depends on factors like content complexity, customization level, and your chosen plan. Select a plan to get started.",
    },
    {
      question: "Can you help with content development for the pitch deck?",
      answer:
        "While our primary focus is design, we recognize the importance of compelling content in a pitch deck. We offer guidance and best practices for structuring and refining your content to effectively communicate your key messages and engage your audience. Select a plan that includes these features to get started.",
    },
    {
      question: "What file formats will I receive for the final pitch deck design?",
      answer:
        "We provide the final pitch deck design in various formats, including PowerPoint (PPTX) and PDF, depending on your selected plan. This ensures you can easily present and share your pitch deck across different platforms and devices.",
    },
    {
      question: "Do you offer revisions after the initial design is delivered?",
      answer:
        "Yes, we offer a certain number of revisions based on the package or service you choose. We understand that feedback and changes may be necessary to achieve the desired outcome, and we strive to ensure your satisfaction with the final pitch deck design.",
    },
    {
      question: "How much does your service cost?",
      answer:
        "We offer packages tailored to different budgets and needs. Choose from our pricing plans to find the one that suits you best.",
    },
    {
      question: "What design tools are used to create pitch decks?",
      answer:
        "Depending on the complexity of the presentation, we use Figma for illustrations and design assets, then transfer these assets to PowerPoint to support our design work.",
    },
    {
      question: "Do you include illustrations and stock pictures in your designs?",
      answer:
        "Yes, we provide illustrations and use stock pictures to enhance the content and give it visual context. Select a plan that includes these features to get started.",
    },
  ];

  return (
    <div className="w-full bg-alabaster" id="faq">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
        <p className="text-center mb-5 tablet:mb-10 laptop:mb-[50px] text-[#0E0829] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]">
          Frequently Asked Questions
        </p>

        <ul className="w-full mx-auto divide-y">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <details className="group mb-6 p-6 bg-white border border-[#D2D2CF] rounded-[12px]">
                <summary className="flex w-full justify-between items-center font-medium marker:content-none hover:cursor-pointer">
                  <span className="w-[90%] text-[#121416] text-[14px] leading-[20px] font-[600]  tablet:text-[16px] tablet:leading-[22px] laptop:text-[20px] laptop:leading-[28px] laptop:font-bold">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <rect
                      x="17"
                      y="8"
                      width="2"
                      height="16"
                      rx="1"
                      transform="rotate(90 17 8)"
                      fill="#121416"
                      stroke="#121416"
                    />
                    <rect
                      x="8"
                      y="1"
                      width="2"
                      height="16"
                      rx="1"
                      fill="#121416"
                      stroke="#121416"
                      className="block group-open:hidden"
                    />
                  </svg>
                </summary>
                <article>
                  <p className="text-[14px] pt-2 leading-5 tablet:text-[16px] tablet:leading-6 laptop:text-[20px] laptop:leading-[28px] text-[#50555B] w-[90%]">
                    {faq.answer}
                  </p>
                </article>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;