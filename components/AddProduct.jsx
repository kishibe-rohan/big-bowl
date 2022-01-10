import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router' 

import styles from "../styles/AddProduct.module.css";

const AddProduct = ({setClose}) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOption, setExtraOption] = useState([]);
    const [extra, setExtra] = useState(null);

    const changePrice = (e,index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices[currentPrices]
    }

    const handleExtraInput = (e) => {
        setExtra({...extra,[e.target.name]:e.target.value})
    }

    const handleExtra = (e) => {
        setExtraOption((prev) => [...prev,extra])
    }

    const handleSubmit = async() => {
        const data = new FormData();
        try{
            const newProduct = {
                title,
                desc,
                prices,
                extraOption,
            }

            await axios.post("http://localhost:3000/api/products", newProduct);
            setClose(true);
        }catch(err)
        {
            console.log(err)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={() => setClose(true)}>X</span>
                <h1>Add New Dish</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an image</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
               <div className={styles.item}>
                   <label className={styles.label}>Desc</label>
                   <textarea rows={4} type="text" onChange={(e) => setDesc(e.target.value)}/>
               </div>
               <div className={styles.item}>
                   <label className={styles.label}>Prices</label>
                   <div className={styles.priceContainer}>
                       <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder="Small" onChange={(e) => changePrice(e,0)}/>
                       <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder="Medium" onChange={(e) => changePrice(e,1)}/>
                       <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder="Large" onChange={(e) => changePrice(e,2)}/>
                   </div>
               </div>
               <div className={styles.item}>
                   <label className={styles.label}>Extra</label>
                   <div>
                     <input className={`${styles.input} ${styles.inputSm}`} type="text" placeholder='Item'  name="text" onChange={handleExtraInput}/>
                     <input className={`${styles.input} ${styles.inputSm}`} type="number" placeholder='Price' name="price" onChange={handleExtraInput}/>
                     <button onClick={handleExtra}>
                         Add 
                     </button> 
                   </div>
                   <div className={styles.extraItems}>
                       {extraOption.map((option) => (
                           <span key={option.text} className={styles.extraItem}>
                               {option.text}
                           </span>
                       ))}
                   </div>
               </div>
               <button className={styles.addButton}  onClick={handleSubmit}>
                   Add Dish 
               </button>
            </div>
        </div>
    )
}