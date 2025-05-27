'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useCookies } from 'react-cookie'
import { useRouter, usePathname } from 'next/navigation'

import { useStore } from '../store/useStore'

const Navbar = () => {
  const [ , setCookie ] = useCookies(["user", "token", "isLogged"])
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const router = useRouter()
  const pathname = usePathname()

  const { isLogged, user, setlink, setShowLogin } = useStore()
  const [visibility, setVisibility] = useState(false)


  const toggleNavbar = () => {
    setVisibility(!visibility)
  }

  const logout = () => {
    setCookie("user", "", { path: "/" })
    setCookie("token", "", { path: "/" })
    setCookie("isLogged", false, { path: "/" })
    setlink('/')
    router.push('/')
  }

  const login = () => {
    toggleNavbar()
    setShowLogin(true)
  }

  const navLinks = [
    { href: '/pitchdecks', label: 'Pitch Decks' },
    { href: '/make-deck', label: 'Make a deck' },
    { href: '/template', label: 'Shop' },
    { href: '/blog', label: 'Blog' },
    { href: '/about-us', label: 'About us' },
  ]

  return (
    <header className="w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-40">
      <nav className="sticky top-0 z-10 block items-center h-[40px] my-[10px]">
        <div className="flex flex-wrap items-center justify-between w-full laptop:max-w-[1152px] mx-auto">
          <Link
            href="/"
            className={`flex items-center w-full ${isLogged && isSmallScreen ? 'max-w-[140px]' : 'max-w-[180px]'} h-[37px]`}
            onClick={() => setVisibility(false)}
          >
            <Image src={'/assets/Logo.svg'} alt="Pitchdeck Design Logo" width={180} height={37} />
          </Link>

          <div className="flex items-center laptop:order-1">
            {isSmallScreen ? (
              <>
                <div className="flex items-center gap-2">
                  {isLogged && <p className="flex">{user?.userName}</p>}
                  <div className="w-6 h-6 cursor-pointer" onClick={toggleNavbar}>
                    <Image src={'/assets/hambugger.svg'} alt="Hamburger Icon" width={24} height={24} />
                  </div>
                </div>

                {visibility && (
                  <div className="fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8">
                    <ul className="flex flex-col font-medium gap-8">
                      {navLinks.map((link) => (
                        <li key={link.href} onClick={toggleNavbar}>
                          <Link
                            href={link.href}
                            className={`text-[#0A0A0A] text-sm font-medium ${
                              pathname.includes(link.href) ? 'text-myGreen-400' : ''
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      {isLogged ? (
                        <div
                          className="w-fit flex items-center gap-1 cursor-pointer border border-[#D2D2CF] hover:border-[#FF6464] shadow-navbarLink p-2"
                          onClick={logout}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path
                              d="M8.5 7C6.4 8.2 5 10.5 5 13c0 3.8 3.1 7 7 7s7-3.2 7-7c0-2.6-1.4-4.9-3.5-6"
                              stroke="#FF6464"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path d="M12 10V4" stroke="#FF6464" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <p className="text-[#FF6464] text-14 font-medium px-1">Logout</p>
                        </div>
                      ) : (
                        <button
                          onClick={login}
                          className="cursor-pointer w-fit bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-white text-14"
                        >
                          Login your account
                        </button>
                      )}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <ul className="flex font-medium flex-row items-center gap-[30px] desktop:gap-[50px]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-[#0A0A0A] text-sm font-medium hover:text-myGreen-400 ${
                        pathname.includes(link.href) ? 'text-myGreen-400' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {isLogged ? (
                  <div className="flex items-center gap-6">
                    <p>{user?.userName}</p>
                    <div
                      className="flex items-center gap-1 cursor-pointer border border-[#D2D2CF] hover:border-[#FF6464] shadow-navbarLink p-2"
                      onClick={logout}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          d="M8.5 7C6.4 8.2 5 10.5 5 13c0 3.8 3.1 7 7 7s7-3.2 7-7c0-2.6-1.4-4.9-3.5-6"
                          stroke="#FF6464"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path d="M12 10V4" stroke="#FF6464" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="text-[#FF6464] text-14 font-medium px-1">Logout</p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={login}
                    className="cursor-pointer bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-white text-14"
                  >
                    Login your account
                  </button>
                )}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
