import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 style={{color:"red" ,backgroundColor:"green" }}>
    My First App
    </h1>
<div>
<Link href="/about">Go to the About Page</Link> 
</div>

<div>
<Link href="/contact">Go to the contact page Page</Link> 
</div>


   </>

  )
}