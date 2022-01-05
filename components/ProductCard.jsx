import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`} passHref>
          <Image src={product.img} width="500" height="500"/>
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.price}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  )
}

export default ProductCard
