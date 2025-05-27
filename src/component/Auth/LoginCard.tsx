'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import axios from '../../lib/axios'
import { useStore } from '../../store/useStore' // <-- updated import

type LoginCardProps = {
  getEmail: (email: string) => void
}

const LoginCard = ({ getEmail }: LoginCardProps) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const { setLoginWithCard, setShowLogin, setShowData, setShowOTP } = useStore() // <-- updated usage
  const [, setCookie] = useCookies(['user', 'token', 'isLogged'])

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  useEffect(() => {
    if (error) setError(false)
  }, [email, error])

  const login = async () => {
    if (!email || !emailRegex.test(email)) {
      setError(true)
      return
    }

    try {
      const res = await axios.post(
        'auth/login',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      )

      const response = res.data

      // New user, unverified — send to OTP
      if (response.message?.includes('OTP')) {
        getEmail(email)
        setShowOTP(true)
      } else {
        // Existing user — log them in
        setCookie('token', response.token)
        setCookie('user', response.user)
        setCookie('isLogged', true)
      }

      setShowLogin(false)
      setLoginWithCard(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response?.data?.error?.title === 'ERROR') {
        // New user, show data collection form
        setShowData(true)
        setLoginWithCard(false)
        getEmail(email)
      } else {
        console.error('Server error:', err)
      }
    }
  }

  const backToLogin = () => {
    setLoginWithCard(false)
    setShowLogin(true)
  }

  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-overlay">
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border border-[#E8E8EA]">
        <button className="w-6 h-6" onClick={backToLogin}>
          <Image
            src="/assets/back.svg"
            alt="Back"
            width={24}
            height={24}
            className="bg-[#F2F1E8] hover:bg-[#CCC8A4] p-[6px]"
          />
        </button>

        <p className="text-center text-20 font-bold tablet:text-24">
          Login to start viewing pitch decks from top companies
        </p>

        <div className="text-left flex flex-col">
          <label htmlFor="email" className="text-16 font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className={`bg-white mb-4 border h-12 px-4 ${
              error ? 'border-[#E03C00]' : 'border-[#BBBBB9]'
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p className="mt-[-8px] text-[#E03C00] text-[10px]">
              Check your email
            </p>
          )}
        </div>

        <button
          onClick={login}
          className="bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] text-white shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm font-medium focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginCard
