import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



function Navbar(){
    return(
 
           <div className="md:flex md:justify-between md:items-center sm:px-12 bg-[#ffffff19] py-7">
               <Link href=""><a>LOGO</a></Link>
               <div className="">
                    <input type="text" placeholder="Enter Your Email" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"></input>
                <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">Request Code</button>
                </div> 
            
              {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}

               <ul className="navLinks">
                  <li><Link href="/login"><a>Login</a></Link></li>
                  <li><Link href="/signup"><a>Signup</a></Link></li>
                  <li><Link href="/create"><a>Create</a></Link></li>
               </ul>

           </div>

    )
}

export default Navbar;