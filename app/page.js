'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { refresh } from './api/api'

export default function Home() {

  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refresh()
    .then((result) => setDishes(result))
    .catch(() => setDishes([]))
    setTimeout(() => setLoading(false), 500)
  }, [])

  const Logo = ({ dimension }) => {
    return <Image
      src={'/logo.png'}
      width={dimension}
      height={dimension}
      alt={'FOSS Club'}
    />
  }

  function Card({ dish, index }) {

    function formatName(inputString) {
      const maxLength = 16;
      if (inputString.length <= maxLength) {
        return inputString;
      } else {
        return inputString.substring(0, maxLength) + "...";
      }
    }    
    
    return <Link href={"/dish/a"}>
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
    <main className={styles.main} style={{ justifyContent: loading || dishes.length == 0 ? 'center' : 'space-evenly', alignItems: loading || dishes.length == 0 ? 'center' : 'flex-start'}}>
      {loading ? <div className={styles.logo}>
        <Logo dimension={200} />
      </div> : dishes.length == 0 ?
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Logo dimension={100} />
          <strong style={{ marginTop: '10px' }}>Ivide onnum thanne illa</strong>
          <p>Poyi list il vallom cherkk</p>
        </div>
      : <>
        {dishes.map((item, index) => {
          return <Card index={index} key={index} dish={item} />
        })}
      </>}
    </main>
  )
}
