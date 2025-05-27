// import MetadataComponent from "../component/Metadata";

const AboutUs = () => {
  return (
    <>

      <div className="mt-[60px] bg-[#ffffff]">
        <div className="w-full max-w-[744px] mx-auto px-4 tablet:px-6 laptop:px-0 py-10 tablet:py-20 laptop:py-[100px]">
          <h1 className="text-20 tablet:text-24 mb-2">ABOUT US</h1>
          <h2 className="text-24 font-bold tablet:text-32 laptop:text-48 mb-8">
            I was always lost looking for high-quality pitch decks from top
            founders who have successfully raised capital. It was scattered all
            over the internet, so I decided to compile them into a single
            directory.
          </h2>
          <h3 className="text-16 tablet:text-20 mb-3">
            My name is Olayanju Idris. I am a senior product designer who runs a
            small design studio called Pixelgum Studio. I created this platform
            to help pitch deck and presentation designers who don&apos;t want to
            search for resources all over the internet. This is a directory of
            over 500 carefully curated pitch decks, divided into different
            categories depending on the type of pitch deck you are looking to
            design or draw inspiration from. We have done all the hard work for
            you, and we hope you like it.
          </h3>
          <h4 className="text-16 tablet:text-20 mb-8">
            Shout out to Amod, Islamiyyah, Ololade, Adeshina, Aishat, Teslim,
            Abdulzeez and Abdulwahab who poured out their hearts and soul to
            make this deck curation, design, building and development a success.
          </h4>
          <p className="text-16 tablet:text-20 mb-6 tablet:mb-10">
            These tools were built by our parent company,{" "}
            <a className="underline" href="https://pixelgumstudio.com">
              Pixelgum Studio.
            </a>{" "}
            Pixelgum Studio is a design and development studio that partners
            with founders to build products and offer design support. We have
            built products like{" "}
            <a className="underline" href="https://wordiebox.com">
              Wordiebox,
            </a>{" "}
            a directory of 20+ free tools to help improve your writing. We also
            publish the{" "}
            <a className="underline" href="https://indieniche.substack.com/">
              Indieniche Newsletter,
            </a>
            a weekly publication that features founder stories, tools and growth
            hacks to support the entrepreneurial community. There is the{" "}
            <a className="underline" href="https://pixelfounder.substack.com/">
              Pixelfounder Newsletter,
            </a>{" "}
            a design focused publication that helps designers and creatives by
            sharing insights to help sharpen their design skills. And lastly,{" "}
            <a className="underline" href="https://landingvault.com/">
              Landingvault
            </a>{" "}
            a directory of the best landing pages to fuel your inspiration for
            your next design project. 
          </p>

          <h3 className="text-24 font-bold tablet:text-32 mb-2">
            For sponsorship
          </h3>
          <p className="text-16 tablet:text-[20px] leading-[30px] tracking-[0]">
            As we grow, we are always welcome to sponsorships and
            collaborations. To reach us, please write to 
            <a href="mailto:pixelgumstudio@gmail.com" className="underline">
              pixelgumstudio@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
