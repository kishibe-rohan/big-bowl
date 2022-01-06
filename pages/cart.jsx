import Image from 'next/image' 
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import styles from '../styles/Cart.module.css'

const Cart = () => {
    const amount = 200;
    const currency = "USD";
    const style = {layout:"vertical"};
    const router = useRouter();

    const cart = [
        {Product:"1",img:"/images/schezwan.png",Name:"Manchurian",Extras:["Chilli Sauce","Garlic Sauce"],Price:20,Quantity:3,Total:80},
        {Product:"2",img:"/images/schezwan.png",Name:"Manchurian",Extras:["Chilli Sauce","Garlic Sauce"],Price:20,Quantity:3,Total:80},
        {Product:"3",img:"/images/schezwan.png",Name:"Manchurian",Extras:["Chilli Sauce","Garlic Sauce"],Price:20,Quantity:3,Total:80},
    ]

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                        <th className={styles.tHead}>Product</th>
              <th className={styles.tHead}>Name</th>
              <th className={styles.tHead}>Extras</th>
              <th className={styles.tHead}>Price</th>
              <th className={styles.tHead}>Quantity</th>
              <th className={styles.tHead}>Total</th>
                        </tr>
                    </tbody>
                    <tbody>
                      {cart.map((product) => (
                          <tr key={product.id} className={styles.tr}>
                              <td>
                                  <div className={styles.imgContainer}>
                                      <Image src={product.img} layout="fill"
                      objectFit="cover"
                      alt=""/>
                                  </div>
                              </td>
                              <td>
                                  <span className={styles.name}>{product.Name}</span>
                              </td>
                              <td>
                                  <span className={styles.extras}>
                                      {product.Extras.map((extra) => (
                                          <span>{extra + " "}</span>
                                      ))}
                                  </span>
                              </td>
                              <td>
                                  <span className={styles.price}>{product.Price}</span>
                              </td>
                              <td>
                                  <span className={styles.quantity}>{product.Quantity}</span>
                              </td>
                              <td>
                                  <span className={styles.total}>${product.Total}</span>
                              </td>
                          </tr>
                      ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$240
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$300
                    </div>
                    <div className={styles.paymentMethods}>
                        <button className={styles.payButton}>COD</button>
                    </div>
                    <button className={styles.button}>CHECKOUT!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;