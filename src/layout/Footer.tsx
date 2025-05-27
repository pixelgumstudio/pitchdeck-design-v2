'use client'

import Image from 'next/image'
import Link from 'next/link'
import { categories, tags } from '../lib/category'
import { createSlug } from '../component/slug'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-4 desktop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
        <div className="flex flex-col gap-10 laptop:flex-row laptop:gap-0 laptop:justify-between desktop:gap-10">
          <Link href="/" className="flex items-center w-full max-w-[180px] h-[37px] mr-3">
            <Image
              src="/assets/Logo.svg"
              alt="Pitchdeck Design Logo"
              width={180}
              height={37}
              className="w-full h-full object-contain"
            />
          </Link>

          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="text-[16px] font-bold leading-[22px] text-[#2E2E27]">PRODUCTS</p>
            <Link href="/pitchdecks" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Pitch Decks</Link>
            <Link href="/make-deck" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Make a deck</Link>
            <Link href="/template" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Shop</Link>
            <Link href="/blog" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Blog</Link>
            <Link href="/about-us" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">About us</Link>
            <Link href="/useful-links" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Useful Links</Link>
          </div>

          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p className="text-[16px] font-bold leading-[22px] text-[#2E2E27]">PRODUCT CATEGORIES</p>
            {tags.map((tag, i) => (
              <Link
                key={`tag-${i}`}
                href={`/tag/${createSlug(tag.title)}`}
                className="text-[16px] font-light leading-[22px] text-[#2E2E27]"
              >
                {tag.title}
              </Link>
            ))}
            {categories.map((cat, i) => (
              <Link
                key={`cat-${i}`}
                href={`/category/${createSlug(cat.title)}`}
                className="text-[16px] font-light leading-[22px] text-[#2E2E27]"
              >
                {cat.title}
              </Link>
            ))}
          </div>

          <div className="laptop:hidden desktop:block">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 whitespace-nowrap">
                <p className="text-[16px] font-bold leading-[22px] text-[#2E2E27]">CONTACT INFORMATION</p>
                <a href="mailto:pitchdeckd@gmail.com" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">
                  pitchdeckd@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-4 whitespace-nowrap">
                <p className="text-[16px] font-bold leading-[22px] text-[#2E2E27]">LEGAL</p>
                <Link href="/terms" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Terms and Conditions</Link>
                <Link href="/policy" className="text-[16px] font-light leading-[22px] text-[#2E2E27]">Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
