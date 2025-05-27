'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from '../../lib/axios'
import { useStore } from '../../store/useStore'
import { useCookies } from 'react-cookie'

type OTPCardProps = {
  email: string
}

const OTPCard = ({ email }: OTPCardProps) => {
  const router = useRouter()
  const { setShowOTP } = useStore()

  const [otpCode, setOtpCode] = useState('')
  const [error, setError] = useState(false)
  const [errMsg, setErrMsg] = useState(
    'Your OTP code is incorrect, please enter the correct code.'
  )
  const [seconds, setSeconds] = useState(120)

  const [, setCookie] = useCookies(['user', 'token', 'isLogged'])

  useEffect(() => {
    setError(false)
  }, [otpCode])

  useEffect(() => {
    if (seconds === 0) return
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`)

  const login = async () => {
    if (!otpCode) {
      setError(true)
      setErrMsg('Please enter the OTP code.')
      return
    }

    try {
      const res = await axios.post(
        'auth/validate',
        { email, OTPCODE: otpCode },
        { headers: { 'Content-Type': 'application/json' } }
      )

      const { token, user } = res.data
      setCookie('token', token)
      setCookie('user', user)
      setCookie('isLogged', true)
      setShowOTP(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(true)
      const message = err.response?.data?.error?.message

      if (message === 'Invalid OTP') {
        setErrMsg('Your OTP code is incorrect. Please try again.')
      } else if (message === 'Token expired') {
        setErrMsg('OTP has expired. Request a new code.')
      } else {
        setErrMsg('Server not responding. Try again later.')
      }
    }
  }

  const resend = async () => {
    setSeconds(120)
    try {
      await axios.post(
        'auth/resendOTP',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      )
    } catch (err) {
      console.error('Failed to resend OTP:', err)
    }
  }

  const close = () => {
    setShowOTP(false)
    router.push('/')
  }

  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-overlay">
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border border-[#E8E8EA]">
        <button onClick={close} className="w-6 h-6">
          <Image
            src="/assets/cancel.svg"
            alt="Cancel"
            width={24}
            height={24}
            className="bg-[#F2F1E8] hover:bg-[#CCC8A4] p-[6px]"
          />
        </button>

        <p className="text-center text-20 font-bold tablet:text-24">
          Enter the OTP we sent to {email}
        </p>

        <div className="text-left flex flex-col">
          <label className="text-16 font-medium mb-2 flex justify-between items-center">
            <span>Enter OTP code</span>
            <span className="border rounded-full w-10 h-10 flex items-center justify-center">
              {formatTime(seconds)}
            </span>
          </label>
          <input
            type="text"
            name="otp"
            placeholder="575772"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            className={`bg-white mb-4 border h-12 px-4 ${
              error ? 'border-[#E03C00]' : 'border-[#BBBBB9]'
            }`}
          />
          <p className={`mt-[-8px] text-[10px] ${error ? 'text-[#E03C00]' : 'text-[#0A0A0A]'}`}>
            {error
              ? errMsg
              : 'Check your inbox and spam folder for your OTP code.'}
          </p>
        </div>

        <button
          onClick={login}
          className="bg-[#21AB68] hover:bg-[#3E7B52] text-white shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm font-medium focus:outline-none"
        >
          Submit OTP
        </button>

        <button
          disabled={seconds !== 0}
          onClick={resend}
          className={`${
            seconds !== 0 ? 'bg-[#D2D2CF] text-[#666]' : 'bg-white text-[#0A0A0A]'
          } border border-[#D2D2CF] hover:bg-[#D2D2CF] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm font-semibold focus:outline-none`}
        >
          Resend OTP code
        </button>
      </div>
    </div>
  )
}

export default OTPCard
