import React from 'react'

type HeroSectionProps = {
  title: string
  link: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <>
     
      <div className="mt-[60px] bg-tools-bg pt-10 pb-10 px-4 tablet:px-6 tablet:pt-[100px] tablet:pb-[50px] laptop:pb-[100px] desktop:pt-[160px]">
        <div className="flex flex-col gap-6 w-full max-w-[959px] mx-auto">
          <p className="text-[#141415] text-24 tablet:text-32 laptop:text-64 tracking-[-3px] font-bold tablet:w-[80%] laptop:w-full">
            Create {title} agreement for your website
          </p>
          <p className="text-[#414143] text-16 tablet:text-20 laptop:text-24">
            Generate a free {title} for your website in seconds. Once you generate one, we will display the content that you can copy and also send an email along with a downloadable version of your {title} agreement
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroSection