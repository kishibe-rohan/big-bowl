import Image from 'next/image' 
import { useState } from 'react'

import styles from '../../styles/Product.module.css'

const Product = () => {
    const [price,setPrice] = useState(20)
    const [size,setSize] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const [extras,setExtras] = useState(["Garlic Sauce","Chilli Sauce","Soya Sauce","Mushroom"])

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) => {
        const difference = sizeIndex*5;
        setSize(sizeIndex);
        changePrice(difference)
    }

    const handleChange = (e) => {
       const checked = e.target.checked;

       if(checked)
       {
           changePrice(10);
           //setExtras((prev) => [...prev,option])
       }else{
           changePrice(-10);
           //setExtras(extras.filter((extra) => extra._id !== option._id));
       }
    }
  return (
    <div className={styles.container}>
      <div className={styles.left} >
          <div className={styles.imgContainer}>
              <Image src="/images/schezwan.png" alt="" objectFit="contain" layout="fill"/>
          </div>
      </div>
      <div className={styles.right}>
          <h1 className={styles.title}>Schezwan</h1>
          <span className={styles.price}>${price}</span>
          <p className={styles.desc}>Best Schezwan in town</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
              <div className={styles.size} onClick={() => handleSize(0)}>
                  <Image src="/images/size.png" layout="fill" alt=""/>
                  <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={() => handleSize(1)}>
                  <Image src="/images/size.png" layout="fill" alt=""/>
                  <span className={styles.number}>Medium</span>
              </div>
              <div  className={styles.size} onClick={() => handleSize(2)}>
                  <Image src="/images/size.png" layout="fill" alt=""/>
                  <span className={styles.number}>Large</span>
              </div>
          </div>   
          <h3 className={styles.choose}>Choose toppings</h3>
      <div className={styles.ingredients}>
          {extras.map((option) => (
              <div className={styles.option}>
                  <input className={styles.checkbox} type="checkbox" name={option}  onChange={(e) => handleChange(e)}/>
                  <label htmlFor="double">{option}</label>
              </div> 
          ))}
      </div>
      <div className={styles.add}>
          <input onChange={(e) => setQuantity(e.target.value)} type="number"
            defaultValue={1}
            className={styles.quantity}
          />
            <button className={styles.button}>
                Add To Cart
            </button>
      </div> 
      </div>
    </div>
  )
}

export default Product
