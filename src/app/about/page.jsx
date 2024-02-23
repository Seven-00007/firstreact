import Link from "next/link"
import styles from './page.modules.css'

export default function About(){
    return(
        // if we are inside the return and we use {}, it indicstes that we want to perform a javascript
        <>
          <h1 className> This is the about page</h1>
        <Link href= "/">Go to the Main Page</Link>
        <h1 className={styles.text}This is the about Page></h1> 
        <p className={`${styles.text} text`}> I am styles with global css </p>
       
       </>
      
    )
    
}
