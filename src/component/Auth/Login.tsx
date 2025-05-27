'use client'

import { useStore } from '../../store/useStore'
import { useRouter } from 'next/navigation'
import GoogleLogins from './Google'
import Image from 'next/image'

const Login = () => {
  const router = useRouter()
  const { setShowLogin, setLoginWithCard } = useStore()

  const loginWithEmail = () => {
    setLoginWithCard(true)
    setShowLogin(false)
  }

  const close = () => {
    setShowLogin(false)
    router.push('/')
  }

  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-overlay">
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border border-[#E8E8EA]">
        <button className="ml-auto w-6 h-6" onClick={close}>
          <Image src="/assets/cancel.svg" alt="Close" width={24} height={24} />
        </button>

        <p className="text-20 text-center font-bold tablet:text-24">
          Login to start viewing pitch decks from top companies
        </p>

        <GoogleLogins />

        <button
          onClick={loginWithEmail}
          className="text-[#0A0A0A] bg-white border border-[#D2D2CF] hover:bg-[#F9F9F9] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm font-semibold focus:outline-none"
        >
          Continue with Email
        </button>
      </div>
    </div>
  )
}

export default Login
