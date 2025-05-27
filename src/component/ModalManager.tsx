'use client'

import { useStore } from '../store/useStore'
import Login from './Auth/Login'
import LoginCard from './Auth/LoginCard'
import DataCard from './Auth/DataCard'
import { useState } from 'react';
import OTPCard from './Auth/OTPCard'

export default function ModalManager() {
  const { showLogin, loginWithCard, showData, showOTP  } = useStore()
  const [email, setEmail] = useState('')




  return (
    <>
      {showLogin && <Login />}
      {loginWithCard && <LoginCard getEmail={setEmail} />}
      {showData && <DataCard email={email} />}
      {showOTP && <OTPCard email={email} />}
    </>
  )
}
