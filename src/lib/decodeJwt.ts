// lib/decodeJwt.ts
import { jwtDecode } from 'jwt-decode'

export const getDecodedUser = (token: string) => {
  try {
    return jwtDecode(token)
  } catch (err) {
    console.error('Invalid token:', err)
    return null
  }
}
