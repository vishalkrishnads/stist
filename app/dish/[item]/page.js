'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { getContributor, getDish } from '@/app/api/api'

export default function Dish({ params }) {

  const [dish, setDish] = useState({
    name: 'loading',
    image: '',
    ingredients: [],
    recipe: []
  })

  useEffect(() => {
    setDish(getDish(parseInt(params.item)))
  }, [])

  return (
    <main className={styles.main}>

      <div className={styles.desktop}>
        <div className={styles.info}>
          <div style={{ flex: 0.5 }} />
          <div className={styles.container}>
            <Image
              loader={({ src }) => {
                return src
              }}
              src={dish.image}
              unoptimized
              alt={dish.image}
              width={400}
              height={300}
              style={{
                borderRadius: '20px'
              }}
            />
            <h1>{dish.name}</h1>
            <h4>by {getContributor()}</h4>
          </div>
          <div style={{ flex: 0.5 }} />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>Ingredients</h2>
          </div>
          <div className={styles.para}>
          <ol>
            {dish.ingredients.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ol>
          </div>
          <div className={styles.heading}>
            <h2>Method of preparation</h2>
          </div>
          <div className={styles.para}>
            <ul>
              {dish.recipe.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.info}>
            <Image
              loader={({ src }) => {
                return src
              }}
              src={dish.image}
              width={300}
              height={200}
              unoptimized
              alt={dish.image}
              style={{
                borderRadius: '20px'
              }}
            />
            <h1>{dish.name}</h1>
            <h4>by {getContributor()}</h4>
        </div>
        <div className={styles.content}>
        <div className={styles.heading}>
            <h2>Ingredients</h2>
          </div>
          <div className={styles.para}>
          <ol>
            {dish.ingredients.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ol>
          </div>
          <div className={styles.heading}>
            <h2>Method of preparation</h2>
          </div>
          <div className={styles.para}>
            <ul>
              {dish.recipe.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
