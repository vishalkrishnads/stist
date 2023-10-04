'use client'

import Image from 'next/image'
import { getDish, getContributor } from '@/app/api/api'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Dish({ params }) {

  const [dish, setDish] = useState({
    name: 'loading',
    image: '',
    ingredients: [],
    recipe: []
  })
  const [error, setError] = useState('loading')

  useEffect(() => {
    getDish(parseInt(params.item))
    .then((result) => {
      setDish(result);
      setError('')
    })
    .catch((error) => setError(error))
  }, [])

  return (
    <main className={styles.main}>

      {error ?
      <p>{error}</p>
      : <div className={styles.desktop}>
        <div className={styles.info}>
          <div style={{ flex: 0.5 }} />
          <div className={styles.container}>
            <Image
              loader={({ src }) => {
                return src
              }}
              src={'https://www.yummytummyaarthi.com/wp-content/uploads/2019/09/new-1-1.jpg'}
              width={400}
              height={300}
              style={{
                borderRadius: '20px'
              }}
            />
            <h1>Clip with JS</h1>
            <h4>by Team A</h4>
          </div>
          <div style={{ flex: 0.5 }} />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>Ingredients</h2>
          </div>
          <div className={styles.para}>
          <ol>
            <li>4 pounds of chicken pieces (drumsticks, thighs, wings, or breast pieces)</li>
            <li>1 cup buttermilk</li>
            <li>1 teaspoon salt</li>
            <li>1/2 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>1/2 teaspoon onion powder</li>
            <li>2 cups all-purpose flour</li>
            <li>1 teaspoon salt</li>
            <li>1/2 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>1/2 teaspoon onion powder</li>
            <li>1/2 teaspoon dried thyme</li>
            <li>1/2 teaspoon dried oregano</li>
            <li>Cooking oil (for deep frying)</li>
          </ol>
          </div>
          <div className={styles.heading}>
            <h2>Method of preparation</h2>
          </div>
          <div className={styles.para}>
            <ul>
              <li>
                <strong>Marinating the Chicken:</strong>
                <ul>
                  <li>In a large mixing bowl, combine the buttermilk, salt, black pepper, paprika, garlic powder, and onion powder.</li>
                  <li>Add the chicken pieces to the buttermilk mixture, making sure they are fully coated.</li>
                  <li>Cover the bowl with plastic wrap or a lid and refrigerate for at least 4 hours, or preferably overnight. This will help tenderize the chicken and infuse it with flavor.</li>
                </ul>
              </li>
              <li>
                <strong>Coating the Chicken:</strong>
                <ul>
                  <li>In a separate bowl, combine the flour, salt, black pepper, paprika, garlic powder, onion powder, dried thyme, and dried oregano.</li>
                  <li>Remove the chicken pieces from the buttermilk marinade, allowing any excess to drip off.</li>
                  <li>Dredge each piece of chicken in the flour mixture, making sure they are evenly coated. Shake off any excess flour.</li>
                </ul>
              </li>
              <li>
                <strong>Broasting the Chicken:</strong>
                <ul>
                  <li>Preheat your broaster or deep fryer to 350-375°F (175-190°C).</li>
                  <li>Carefully lower the chicken pieces into the hot oil, one at a time, using a slotted spoon or tongs. Be cautious to avoid overcrowding the fryer, as this can cause the temperature to drop and the chicken to become greasy.</li>
                  <li>Fry the chicken for about 12-15 minutes, or until it is golden brown and the internal temperature reaches 165°F (74°C).</li>
                  <li>Use a meat thermometer to check the internal temperature of the chicken. Remove the chicken pieces from the oil when they are cooked through and crispy.</li>
                </ul>
              </li>
              <li>
                <strong>Draining and Serving:</strong>
                <ul>
                  <li>Place the broasted chicken on a wire rack or paper towels to drain excess oil.</li>
                  <li>Serve the broasted chicken hot with your favorite sides, such as coleslaw, mashed potatoes, biscuits, or gravy.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>}

      {error ?
      null
      : <div className={styles.mobile}>
        <div className={styles.info}>
            <Image
              loader={({ src }) => {
                return src
              }}
              src={'https://www.yummytummyaarthi.com/wp-content/uploads/2019/09/new-1-1.jpg'}
              width={300}
              height={200}
              style={{
                borderRadius: '20px'
              }}
            />
            <h1>Clip with JS</h1>
            <h4>by Team A</h4>
        </div>
        <div className={styles.content}>
        <div className={styles.heading}>
            <h2>Ingredients</h2>
          </div>
          <div className={styles.para}>
          <ol>
            <li>4 pounds of chicken pieces (drumsticks, thighs, wings, or breast pieces)</li>
            <li>1 cup buttermilk</li>
            <li>1 teaspoon salt</li>
            <li>1/2 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>1/2 teaspoon onion powder</li>
            <li>2 cups all-purpose flour</li>
            <li>1 teaspoon salt</li>
            <li>1/2 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>1/2 teaspoon onion powder</li>
            <li>1/2 teaspoon dried thyme</li>
            <li>1/2 teaspoon dried oregano</li>
            <li>Cooking oil (for deep frying)</li>
          </ol>
          </div>
          <div className={styles.heading}>
            <h2>Method of preparation</h2>
          </div>
          <div className={styles.para}>
            <ul>
              <li>
                <strong>Marinating the Chicken:</strong>
                <ul>
                  <li>In a large mixing bowl, combine the buttermilk, salt, black pepper, paprika, garlic powder, and onion powder.</li>
                  <li>Add the chicken pieces to the buttermilk mixture, making sure they are fully coated.</li>
                  <li>Cover the bowl with plastic wrap or a lid and refrigerate for at least 4 hours, or preferably overnight. This will help tenderize the chicken and infuse it with flavor.</li>
                </ul>
              </li>
              <li>
                <strong>Coating the Chicken:</strong>
                <ul>
                  <li>In a separate bowl, combine the flour, salt, black pepper, paprika, garlic powder, onion powder, dried thyme, and dried oregano.</li>
                  <li>Remove the chicken pieces from the buttermilk marinade, allowing any excess to drip off.</li>
                  <li>Dredge each piece of chicken in the flour mixture, making sure they are evenly coated. Shake off any excess flour.</li>
                </ul>
              </li>
              <li>
                <strong>Broasting the Chicken:</strong>
                <ul>
                  <li>Preheat your broaster or deep fryer to 350-375°F (175-190°C).</li>
                  <li>Carefully lower the chicken pieces into the hot oil, one at a time, using a slotted spoon or tongs. Be cautious to avoid overcrowding the fryer, as this can cause the temperature to drop and the chicken to become greasy.</li>
                  <li>Fry the chicken for about 12-15 minutes, or until it is golden brown and the internal temperature reaches 165°F (74°C).</li>
                  <li>Use a meat thermometer to check the internal temperature of the chicken. Remove the chicken pieces from the oil when they are cooked through and crispy.</li>
                </ul>
              </li>
              <li>
                <strong>Draining and Serving:</strong>
                <ul>
                  <li>Place the broasted chicken on a wire rack or paper towels to drain excess oil.</li>
                  <li>Serve the broasted chicken hot with your favorite sides, such as coleslaw, mashed potatoes, biscuits, or gravy.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>}
    </main>
  )
}
