import Image from 'next/image'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
         <div className={styles.callButton}>
           <Image src="/images/call.png" alt="" width="32" height="32"/>
         </div>
         <div className={styles.info}>
           <div className={styles.text}>ORDER NOW!</div>
           <div className={styles.text}>+012 345 678</div>
         </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.png" width="200px" height="150px"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/images/cart.png" width="30px" height="30px"/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
