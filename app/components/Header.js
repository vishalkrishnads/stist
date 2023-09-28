'use client'

import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    
    return <div className='header'>
    <div className='link' onClick={() => router.push('/')}>
      <h1><u>Ruchi</u>kootu</h1>
      <h4>ICFOSS x <a>FOSS United</a></h4>
    </div>
  </div>
}