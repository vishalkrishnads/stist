'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getContributor, refresh } from './api/api'

export default function Home() {

  const [dishes, setDishes] = useState([])

  useEffect(() => {
    setDishes(refresh())
  }, [])

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
    <main className={styles.main} style={{ justifyContent: dishes.length == 0 ? 'center' : 'space-evenly', alignItems: dishes.length == 0 ? 'center' : 'flex-start'}}>
      {dishes.length == 0 ? <div className={styles.logo}>
        <Image
          src={'/logo.png'}
          width={200}
          height={200}
          alt={'FOSS Club'}
        />
      </div> : <>
        {dishes.map((item, index) => {
          return <Card index={index} key={index} dish={item} />
        })}
      </>}
    </main>
  )
}
