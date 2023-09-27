import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] })

export const metadata = {
  title: 'FOSS Recipes',
  description: 'A demo website for FOSS Club, STIST',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <div className='margin' />
          <div className='header'>
            <h1><u>Ruchi</u>kootu</h1>
            <h4>STIST x <a>FOSS United</a></h4>
          </div>
          <div className='margin' />
        </header>
        <div className='content'>{children}</div>
      </body>
    </html>
  )
}
