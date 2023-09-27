'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  function Card() {
    
    return <Link href={"/dish"}>
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          loader={({ src }) => {
            return src
          }}
          src={'https://www.yummytummyaarthi.com/wp-content/uploads/2019/09/new-1-1.jpg'}
          width={250}
          height={150}
          style={{
            borderRadius: '20px'
          }}
        />
      </div>
      <div className={styles.info}>
        <h1>Clip with JS</h1>
        <p>by Team A</p>
      </div>
    </div></Link>
  }

  return (
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}
