'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { jwtDecode } from 'jwt-decode'
import { useStore } from '../../store/useStore'
import { useCookies } from 'react-cookie'
import axios from '../../lib/axios'
import type { User } from '../../store/types'

type GoogleUser = {
  sub: string
  email: string
  given_name: string
  family_name: string
  picture?: string
}

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (options: { client_id: string; callback: (response: { credential: string }) => void }) => void
          renderButton: (parent: HTMLElement | null, options: { theme: string; size: string; width: number }) => void
        }
      }
    }
  }
}

const GoogleLogins = () => {
  const {
    setIsLoading,
    setIsLoggedin,
    setShowData,
    address,
    setShowLogin,
  } = useStore()

  const [, setCookie] = useCookies(['user', 'token', 'isLogged'])

 const signIn = async (response: { credential: string }) => {
    setIsLoading(true)
    setShowLogin(false)

    const user: GoogleUser = jwtDecode(response.credential)

    const payload: Partial<User> & {
      googleId: string
      userLocation: string
      userName: string
      firstName: string
      lastName: string
    } = {
      googleId: user.sub,
      email: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      userName: '@' + user.given_name,
      userLocation: address,
    }

    try {
      const res = await axios.post(
        'auth/login',
        { googleId: user.sub, email: user.email },
        { headers: { 'Content-Type': 'application/json' } }
      )

      setCookie('token', res.data.token)
      setCookie('isLogged', true)
      setCookie('user', res.data.user)

      setIsLoggedin(true)
      setShowLogin(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response?.status === 401) {
        console.warn('Unauthorized login attempt')
        setShowLogin(true)
      } else if (err.response?.status === 404) {
        // Register the user
        try {
          const res = await axios.post('auth/register', payload, {
            headers: { 'Content-Type': 'application/json' },
          })

          setCookie('token', res.data.token)
          setCookie('user', res.data.user)
          setCookie('isLogged', true)

          setIsLoggedin(true)
          setShowData(false)
          setShowLogin(false)
        } catch (regErr) {
          console.error('Registration error:', regErr)
        }
      } else {
        console.error('Google login error:', err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!window.google || !process.env.NEXT_PUBLIC_GOOGLE_ID) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
      callback: signIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
        width: 400,
      }
    );
  }, []);

  return <span className="relative overflow-hidden h-12 flex bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none">
      <div
        id="signInDiv"
        className="w-full h-full absolute right-0 left-[6%] opacity-[0.01]"
      ></div>

<Image
        src="/assets/google_logo.svg"
        alt="Google Logo"
        width={18}
        height={18}
        className="pr-1"
      />      Continue with Google
    </span>
}

export default GoogleLogins

