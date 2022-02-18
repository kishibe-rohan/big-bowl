import { useState } from "react";
import {useRouter} from 'next/router'

import axios from 'axios';
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = async() => {
        try{

            
            await axios.post("http://localhost:3000/api/login",{
                username,
                password
            })

            router.push("/admin");
        }catch(err)
        {
            setError(true);
           
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.text}>Admin Login</h1>
                <input className={styles.input} placeholder = "Username" onChange={(e) => setUsername(e.target.value)}/>
                <input className={styles.input} placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className={styles.button} onClick={handleSubmit}>SIGN IN</button>
                {
                    error && <span className={styles.error}>Invalid Credentials</span>
                }
            </div>
        </div>
    )
}

export default Login;