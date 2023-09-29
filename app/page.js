'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getContributor, refresh } from './api/api'

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [dishes, setDishes] = useState([])

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
    
    return <Link href={`/dish/${index}`}>
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          loader={({ src }) => {
            return src
          }}
          src={dish.image}
          width={250}
          height={150}
          unoptimized
          alt={dish.name}
          style={{
            borderRadius: '20px'
          }}
        />
      </div>
      <div className={styles.info}>
        <h1>{formatName(dish.name)}</h1>
        <p>by {getContributor()}</p>
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
