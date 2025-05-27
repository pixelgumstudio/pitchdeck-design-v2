'use client'

import { useStore } from '../store/useStore'
import Login from './Auth/Login'
import LoginCard from './Auth/LoginCard'
import DataCard from './Auth/DataCard'
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import OTPCard from './Auth/OTPCard'
import { loadTags } from '../lib/functions';

export default function ModalManager() {
  const { showLogin, loginWithCard, showData, showOTP, setTags  } = useStore()
  const [email, setEmail] = useState('')

    // Fetch All Tags
  const { data: loadedTags = [] } = useQuery('tags', loadTags);
    // Set Tags
   useEffect(() => {
    if (loadedTags && loadedTags.length > 1) {
      setTags(loadedTags);
      // console.log('Tags: ', loadedTags);
    }
  }, [loadedTags, setTags]);
  


  return (
    <>
      {showLogin && <Login />}
      {loginWithCard && <LoginCard getEmail={setEmail} />}
      {showData && <DataCard email={email} />}
      {showOTP && <OTPCard email={email} />}
    </>
  )
}
