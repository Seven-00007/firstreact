import Link from "next/link";
import styles from './contact.css'
<>
<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
</body>
<p className={`${styles.text} text`}> I am styles with global css </p>

<Link href= "/">Go to the Main Page</Link>
<Link href= "/about">Go to the Main Page</Link>

</>
