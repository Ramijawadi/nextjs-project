import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <>
    
  

        <div className="bg" >
          <img className="image" src='/agency.png'/>
        
         </div>
         
        <nav>
        <h2 href='/' className='pos-h2'><span>Sos</span>Agency</h2>
        <Link className="active" href='/'>Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/Contact'>contact</Link>
        <Link href='/Login'><button className="login">Login</button></Link>
       </nav>
      
   
      
    </>
  );
}

export default Navbar;




