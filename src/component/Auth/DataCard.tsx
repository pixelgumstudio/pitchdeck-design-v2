'use client'

import { useState } from 'react'
import axios from '../../lib/axios'
import { useStore } from '../../store/useStore'
import Image from 'next/image'

type DataCardProps = {
  email: string
}

const DataCard = ({ email }: DataCardProps) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('@')
  const [error, setError] = useState<string | null>(null)

  const {
    setLoginWithCard,
    setShowData,
    setShowLogin,
    setShowOTP,
    address,
  } = useStore()

  const handleRegister = async () => {
    try {
      await axios.post(
        'auth/register',
        {
          email,
          firstName,
          lastName,
          userName,
          userLocation: address,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      setShowData(false)
      setShowOTP(true)
      setShowLogin(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Registration error:', err)
      setError(err.response?.data?.message || 'Something went wrong')
    }
  }

  const returnToEmailCard = () => {
    setShowData(false)
    setLoginWithCard(true)
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-overlay">
      <div className="w-[90%] max-w-[499px] flex flex-col p-6 rounded-[12px] bg-white border border-[#E8E8EA]">
        <Image
          src="/assets/back.svg"
          alt="Back"
          width={24}
          height={24}
          className="p-[6px] bg-[#F2F1E8] hover:bg-[#CCC8A4] w-6 h-6 cursor-pointer"
          onClick={returnToEmailCard}
        />

        <p className="text-20 font-bold tablet:text-24 mb-6">
          Login to start viewing pitch decks from top companies
        </p>

        <div className="text-left flex flex-col mb-10">
          <label className="text-16 font-medium mb-2">Email address</label>
          <input
            type="text"
            value={email}
            disabled
            className="text-14 tablet:text-16 bg-[#F9F9F9] border border-[#BBBBB9] h-12 px-4"
          />
        </div>

        <div className="tablet:flex gap-6 w-full">
          <div className="text-left flex flex-col">
            <label className="text-16 font-medium mb-2">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-14 tablet:text-16 border border-[#BBBBB9] h-12 px-4 mb-6 bg-white w-[240px] tablet:w-[213px]"
            />
          </div>
          <div className="text-left flex flex-col">
            <label className="text-16 font-medium mb-2">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-14 tablet:text-16 border border-[#BBBBB9] h-12 px-4 mb-10 bg-white w-[240px] tablet:w-[213px]"
            />
          </div>
        </div>

        <div className="text-left flex flex-col">
          <label className="text-16 font-medium mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your preferred username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="text-14 tablet:text-16 border border-[#BBBBB9] h-12 px-4 mb-10 bg-white"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleRegister}
          className="bg-[#21AB68] hover:bg-[#3E7B52] text-white px-6 py-3 text-sm font-medium shadow-navbarLink focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default DataCard
